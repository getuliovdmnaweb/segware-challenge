import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, Input } from "../../components";
import styles from "./styles";

const Login = ({ navigation }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    navigation.navigate("SignUp");
  };

  const forgotPassword = async () => {
    navigation.navigate("ForgotPassword");
  };

  const signIn = () => {};

  const loginCard = () => (
    <View style={styles.loginCard}>
      <Text data-test="component-title" style={styles.title}>
        Login
      </Text>
      <Input
        data-test="component-username-input"
        inputStyle={{ marginBottom: 15, fontFamily: "monospace" }}
        label="Username"
        placeholder="Type your username"
        inputValue={username}
        setInputValue={setUserName}
      />
      <Input
        data-test="component-password-input"
        inputStyle={{ marginBottom: 5 }}
        label="Password"
        placeholder="Type your password"
        inputValue={password}
        setInputValue={setPassword}
        secureTextEntry={true}
      />
      <Text
        data-test="component-forgot-password"
        onPress={forgotPassword}
        style={styles.forgotPassword}
      >
        Forgot password?
      </Text>
      <Button
        data-test="component-sign-in-button"
        title="Sign in"
        onPress={signIn}
      />
      <Text style={styles.or}>or</Text>
      <Button
        data-test="component-sign-up-button"
        title="Sign up"
        type="outline"
        onPress={signUp}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.body}></View>
      {loginCard()}
    </View>
  );
};

export default Login;
