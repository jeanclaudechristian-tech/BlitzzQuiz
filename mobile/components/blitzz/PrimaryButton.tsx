import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator // 1. 引入组件
} from "react-native";
import { colors, sizes, fonts } from "./tokens";

type PrimaryButtonProps = {
  label: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
  isLoading?: boolean; // 2. 新增属性
};

export function PrimaryButton({
                                label,
                                style,
                                textStyle,
                                onPress,
                                isLoading = false // 默认为 false
                              }: PrimaryButtonProps) {
  return (
      <TouchableOpacity
          // 3. 加载时稍微变淡，提供视觉反馈
          style={[styles.button, style, isLoading && { opacity: 0.8 }]}
          onPress={onPress}
          activeOpacity={0.7}
          // 4. 加载中禁止点击，防止重复提交
          disabled={isLoading}
      >
        {isLoading ? (
            // 5. 显示白色转圈动画
            <ActivityIndicator color={colors.light} />
        ) : (
            <Text style={[styles.text, textStyle]}>{label}</Text>
        )}
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: sizes.buttonHeight,
    borderRadius: sizes.inputRadius,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.light,
    fontSize: 16,
    fontFamily: fonts.inter,
    fontWeight: "500",
  },
});