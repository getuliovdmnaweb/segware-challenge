import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { persian_red } from "../../utils/colors";

const Button = ({ title, onPress, touchableStyle, textStyle, type }) => {
  if (type === "outline") {
    return (
      <TouchableOpacity
        data-test="component-button-outline"
        style={{ ...styles.touchableOpacityOutline, ...touchableStyle }}
        onPress={onPress}
      >
        <Text
          data-test="component-title-outline"
          style={{ ...styles.textOutline, ...textStyle }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      data-test="component-button-primary"
      style={{ ...styles.touchableOpacity, ...touchableStyle }}
      onPress={onPress}
    >
      <Text
        data-test="component-title-primary"
        style={{ ...styles.text, ...textStyle }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    padding: 10,
    alignItems: "center",
    backgroundColor: persian_red,
    borderRadius: 5,
  },
  touchableOpacityOutline: {
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
