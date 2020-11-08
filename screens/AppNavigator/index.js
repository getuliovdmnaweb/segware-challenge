import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import LoginNavigator from "./LoginNavigator";
import HomeNavigator from "./HomeNavigator";

const AppNavigator = () => {
  const finishedLoging = useSelector((state) => state.user.finishedLoging);
  const feeds = useSelector((state) => state.feeds.feedsArray);

  return finishedLoging ? <HomeNavigator /> : <LoginNavigator />;
};

export default AppNavigator;
