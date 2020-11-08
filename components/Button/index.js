import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { persian_red } from "../../utils/colors";

const Button = ({
  title,
  onPress,
  touchableStyle,
  textStyle,
  type,
  disabled = false,
}) => {
  const styles = useStyles(disabled);
  if (type === "outline") {
    return (
      <Pressable
        data-test="component-button-outline"
        style={{ ...styles.pressableOutline, ...touchableStyle }}
        onPress={onPress}
        android_ripple={{ color: persian_red }}
      >
        <Text
          data-test="component-title-outline"
          style={{ ...styles.textOutline, ...textStyle }}
        >
          {title}
        </Text>
      </Pressable>
    );
  }
  return (
    <Pressable
      data-test="component-button-primary"
      style={{ ...styles.pressable, ...touchableStyle }}
      onPress={onPress}
      android_ripple={{ color: "white" }}
      disabled={disabled}
    >
      <Text
        data-test="component-title-primary"
        style={{ ...styles.text, ...textStyle }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

const useStyles = (disabled) =>
  StyleSheet.create({
    pressable: {
      padding: 10,
      alignItems: "center",
      backgroundColor: persian_red,
      borderRadius: 5,
      opacity: disabled ? 0.5 : 1,
    },
    pressableOutline: {
      padding: 10,
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 5,
      borderWidth: 1,
      borderColor: persian_red,
      opacity: disabled ? 0.5 : 1,
    },
    text: { color: "white", fontWeight: "bold", fontSize: 16 },
    textOutline: { color: persian_red, fontWeight: "bold", fontSize: 16 },
  });

export default Button;
