import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { persian_red } from "../../utils/colors";

const Button = ({ title, onPress, touchableStyle, textStyle, type }) => {
  if (type === "outline") {
    return (
      <Pressable
        data-test="component-button-outline"
        style={{ ...styles.PressableOutline, ...touchableStyle }}
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
      style={{ ...styles.Pressable, ...touchableStyle }}
      onPress={onPress}
      android_ripple={{ color: "white" }}
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

const styles = StyleSheet.create({
  Pressable: {
    padding: 10,
    alignItems: "center",
    backgroundColor: persian_red,
    borderRadius: 5,
  },
  PressableOutline: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: persian_red,
  },
  text: { color: "white", fontWeight: "bold", fontSize: 16 },
  textOutline: { color: persian_red, fontWeight: "bold", fontSize: 16 },
});

export default Button;
