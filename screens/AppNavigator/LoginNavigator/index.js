import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../Login";
import SignUpScreen from "../../SignUp";
import ForgotPasswordScreen from "../../ForgotPassword";

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
