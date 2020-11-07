import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { black_pearl, whisper } from "../../utils/colors";

const Input = ({
  inputValue,
  setInputValue,
  inputStyle,
  labelStyle,
  textInputStyle,
  label,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={{ ...inputStyle }}>
      <Text
        data-test="component-label"
        style={{ ...styles.label, ...labelStyle }}
      >
        {label}
      </Text>
      <TextInput
        data-test="component-text-input"
        style={{ ...styles.textInput, ...textInputStyle }}
        value={inputValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={(text) => setInputValue(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: black_pearl,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: whisper,
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontFamily: "monospace",
  },
});

export default Input;
