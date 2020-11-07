import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../Login";

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
