import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { AppNavigator } from "./screens";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { createReduxStore } from "./redux";

export default function App() {
  const store = createReduxStore();
  return (
    <Provider data-test="component-provider" store={store}>
      <NavigationContainer data-test="component-navigator-container">
        <StatusBar
          data-test="component-status-bar"
          hidden={false}
          backgroundColor={black_pearl}
        />
        <AppNavigator data-test="component-app-navigator" />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
