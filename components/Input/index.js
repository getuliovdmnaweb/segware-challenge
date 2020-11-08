import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { black_pearl, whisper } from "../../utils/colors";
import IconButton from "../IconButton";

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
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={{ ...inputStyle }}>
      <Text
        data-test="component-label"
        style={{ ...styles.label, ...labelStyle }}
      >
        {label}
      </Text>
      <View style={styles.textInputContainer}>
        <TextInput
          data-test="component-text-input"
          style={{ ...styles.textInput, ...textInputStyle }}
          value={inputValue}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && !showPassword}
          onChangeText={(text) => setInputValue(text)}
          underlineColorAndroid={whisper}
        />
        {secureTextEntry ? (
          <IconButton
            iconName={showPassword ? "ios-eye-off" : "ios-eye"}
            iconSize={24}
            iconColor={black_pearl}
            onPress={() => setShowPassword(!showPassword)}
          />
        ) : null}
      </View>
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
    flex: 3,
    backgroundColor: whisper,
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontFamily: "monospace",
    color: black_pearl,
    fontWeight: "bold",
  },
  textInputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: whisper,
    borderRadius: 5,
    paddingRight: 10,
  },
});

export default Input;
