import React, { createContext, useState, useEffect, useContext } from 'react';
import * as SecureStore from 'expo-secure-store';
import api from '../services/api';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';
// 确保你已经创建了 types/index.ts 并导出了 User 接口
import { User } from "@/types";

type AuthContextType = {
    user: User | null; // ✅ 修复 1：允许 user 为空
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, nickname: string, password: string) => Promise<void>;
    googleLogin: (token: string) => Promise<void>; // ✅ 修复 2：加上 Google 登录定义
    logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        checkLoginStatus();
    }, []);

    const checkLoginStatus = async () => {
        try {
            const token = await SecureStore.getItemAsync('auth_token');
            if (token) {
                const response = await api.get('/user');
                setUser(response.data);
                router.replace("/(tabs)/Home")
            }
        } catch (e) {
            await SecureStore.deleteItemAsync('auth_token');
            setUser(null);
        }
    };

    const login = async (email: string, password: string) => {
        console.log("🔥 [1] AuthContext: login 被调用了！");
        setIsLoading(true);
        try {
            console.log("🔥 [2] AuthContext: 准备调用 api.post");
            const response = await api.post('/login', { email, password });
            console.log("🔥 [3] AuthContext: api.post 返回了，后端验证通过！");

            // 1. 打印看看后端到底给了什么
            console.log("📦 后端数据:", response.data);

            const { user, token } = response.data;

            // 2. 检查 Token 是否存在
            if (!token) {
                throw new Error("后端没返回 Token！");
            }

            console.log("💾 正在保存 Token...");
            await SecureStore.setItemAsync('auth_token', token);
            console.log("✅ Token 保存完毕");

            setUser(user);

            // 3. 关键修改：尝试跳转到根路径 '/'，而不是 '(tabs)'
            // 因为我怀疑你可能还没有写好 (tabs) 页面，导致导航失败
            console.log("🚗 准备跳转到首页...");
            router.replace('/(tabs)/Home');

        } catch (error: any) {
            console.log("💥 [AuthContext] 登录后续处理失败:", error);
            Alert.alert('Erreur', error.message || 'Login failed');
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (email: string, nickname: string, password: string) => {
        setIsLoading(true);
        try {
            console.log("🔥 [AuthContext] 开始注册:", email);

            // 1. 发送真实请求 (之前这里缺失了)
            const response = await api.post('/register', {
                email,
                nickname,
                password,
                password_confirmation: password // Laravel 默认验证需要这个字段
            });

            console.log("✅ [AuthContext] 注册成功!");

            const { user, token } = response.data;

            // 2. 保存 Token
            await SecureStore.setItemAsync('auth_token', token);
            setUser(user);

            // 3. 跳转到学历选择页
            router.push('/auth/EducationLevelScreen');

        } catch (error: any) {
            // 🔴 改这里：打印完整的 error 对象，而不仅仅是 response.data
            console.log("❌ [AuthContext] 详细报错:", error.message);

            if (error.response) {
                // 服务器有回应（比如密码错误，邮箱重复）
                console.log("服务器回应数据:", error.response.data);
                console.log("状态码:", error.response.status);
            } else if (error.request) {
                // 请求发了，没回应（多半是网络不通）
                console.log("😱 请求发出去了，但没收到回应（网络不通/超时）");
            } else {
                console.log("代码写错了:", error.message);
            }
            throw error; // 抛出错误，让 RegisterScreen 知道要停止转圈
        } finally {
            setIsLoading(false);
        }
    };

    // ✅ 修复 3：补上 Google 登录实现
    const googleLogin = async (token: string) => {
        setIsLoading(true);
        try {
            // 这里假设后端接收 token 的字段名是 token
            const response = await api.post('/auth/google/callback', { token });
            const { user, token: jwt } = response.data;

            await SecureStore.setItemAsync('auth_token', jwt);
            setUser(user);
            // @ts-ignore
            router.replace('/(tabs)');
        } catch (error: any) {
            console.log(error);
            Alert.alert('Erreur', 'Google Login Failed');
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        try {
            await api.post('/logout');
        } catch(e) {
            // 忽略错误
        }
        await SecureStore.deleteItemAsync('auth_token');
        setUser(null);
        router.replace('/auth/LoginScreen');
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, register, googleLogin, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);