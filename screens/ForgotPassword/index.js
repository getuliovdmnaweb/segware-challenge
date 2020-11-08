import React, { useState } from "react";
import { View, Text, Platform, KeyboardAvoidingView } from "react-native";
import { Button, Input } from "../../components";
import styles from "./styles";
import { whisper } from "../../utils/colors";

const ForgotPassword = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const password = "Password";

  const getPassword = () => {};
  const goBack = () => {
    navigation.goBack();
  };

  const forgotPasswordCard = () => (
    <View style={styles.forgotPasswordCard}>
      <Text data-test="component-title" style={styles.title}>
        Forgot Password?
      </Text>
      <Input
        data-test="component-username-input"
        inputStyle={{ marginBottom: 15 }}
        label="Username"
        placeholder="Type your username"
        inputValue={username}
        setInputValue={setUsername}
      />
      <Text data-test="component-password-label" style={styles.passwordLabel}>
        Your Password is:
      </Text>
      <View style={styles.passwordContainer}>
        <Text
          data-test="component-password-container-text"
          style={{ ...styles.passwordLabel, color: whisper }}
        >
          {password}
        </Text>
      </View>
      <Button
        data-test="component-get-password-button"
        title="Get password"
        onPress={getPassword}
      />
      <Text style={styles.or}>or</Text>
      <Button
        data-test="component-go-back-button"
        title="Go back"
        type="outline"
        onPress={goBack}
      />
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.header} />
      <View style={styles.body} />
      {forgotPasswordCard()}
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;
