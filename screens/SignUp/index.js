import React, { useState } from "react";
import { View, Text, Platform, KeyboardAvoidingView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, ErrorModal } from "../../components";
import styles from "./styles";
import { signUp } from "../../redux/actions";

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.error.errorMessage);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = () => {
    const user = {
      username,
      password,
    };
    dispatch(signUp(user, navigation));
  };
  const goBack = () => {
    navigation.goBack();
  };

  const signUpCard = () => (
    <View style={styles.signUpCard}>
      <Text data-test="component-title" style={styles.title}>
        Sign up
      </Text>
      <Input
        data-test="component-username-input"
        inputStyle={{ marginBottom: 15 }}
        label="Username"
        placeholder="Type your username"
        inputValue={username}
        setInputValue={setUsername}
      />
      <Input
        data-test="component-password-input"
        inputStyle={{ marginBottom: 65 }}
        label="Password"
        placeholder="Type your password"
        secureTextEntry={true}
        inputValue={password}
        setInputValue={setPassword}
      />

      <Button
        data-test="component-sign-up-button"
        title="Sign up"
        onPress={onSignUp}
        disabled={username && password ? false : true}
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
      {signUpCard()}
      {errorMessage !== "" ? <ErrorModal errorMessage={errorMessage} /> : null}
    </KeyboardAvoidingView>
  );
};

export default SignUp;
