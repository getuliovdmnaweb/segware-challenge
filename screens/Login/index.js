import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Button, Input, ErrorModal } from "../../components";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { signIn, setIsLoging } from "../../redux/actions";
import { persian_red } from "../../utils/colors";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const errorMessage = useSelector((state) => state.error.errorMessage);
  const isLoging = useSelector((state) => state.user.isLoging);

  const signUp = async () => {
    navigation.navigate("SignUp");
  };

  const forgotPassword = async () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignIn = () => {
    const user = {
      username: username,
      password: password,
    };
    dispatch(signIn(user));
    dispatch(setIsLoging(true));
  };

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
        onPress={onSignIn}
        disabled={username && password ? false : true}
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
      {!isLoging ? (
        loginCard()
      ) : (
        <View style={styles.activityIndicator}>
          <ActivityIndicator
            size="large"
            color={persian_red}
            animating={true}
          />
        </View>
      )}
      {errorMessage !== "" ? <ErrorModal errorMessage={errorMessage} /> : null}
    </View>
  );
};

export default Login;
