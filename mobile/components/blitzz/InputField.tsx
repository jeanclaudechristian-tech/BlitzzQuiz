import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, TextInputProps } from "react-native";
import { colors, sizes, fonts } from "./tokens";
import { IconSvg } from "./IconSvg";
import { assets } from "./assets";
import { AnimatedSlashEye } from "./AnimatedSlashEye";

// 1. 定义 Props：继承原生 TextInput 的所有属性
type InputFieldProps = TextInputProps & {
  placeholder: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  secureTextEntry?: boolean;
};

export function InputField({
                             placeholder,
                             leftIcon,
                             rightIcon,
                             secureTextEntry,
                             ...props // 2. 接收 value, onChangeText 等剩余参数
                           }: InputFieldProps) {
  const [isSecure, setIsSecure] = useState(!!secureTextEntry);

  const toggleSecureEntry = () => {
    setIsSecure(!isSecure);
  };

  const renderRightIcon = () => {
    if (secureTextEntry) {
      // 这里的 IconSvg 已经去掉了 color 属性，修复了 TS 报错
      const baseEyeIcon = rightIcon || (
          <IconSvg uri={assets.eyeIcon} width={24} height={24} />
      );

      return (
          <TouchableOpacity
              style={styles.iconButton}
              onPress={toggleSecureEntry}
              activeOpacity={1}
          >
            <AnimatedSlashEye
                isActive={isSecure}
                baseIcon={baseEyeIcon}
                color={colors.dark}
                size={24}
            />
          </TouchableOpacity>
      );
    }

    if (rightIcon) {
      return <View style={styles.iconBox}>{rightIcon}</View>;
    }

    return null;
  };

  return (
      <View style={styles.container}>
        <View style={styles.iconBox}>{leftIcon}</View>
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={colors.secondaryText}
            secureTextEntry={isSecure}
            style={styles.input}
            allowFontScaling={false}
            textAlignVertical="center"
            // 3. 关键：把外部传入的 value 和 onChangeText 绑定到底层输入框
            {...props}
        />
        {renderRightIcon()}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: sizes.inputHeight,
    borderRadius: sizes.inputRadius,
    backgroundColor: colors.grayBg,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  iconBox: {
    width: 50,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  iconButton: {
    width: 50,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    height: "100%",
    paddingVertical: 0,
    fontSize: 14,
    color: colors.dark,
    fontFamily: fonts.inter,
    lineHeight: undefined,
  },
});