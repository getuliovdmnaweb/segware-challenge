import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import LoginNavigator from "./LoginNavigator";

const AppNavigator = () => {
  const finishedLoging = useSelector((state) => state.user.finishedLoging);
  const feeds = useSelector((state) => state.feeds.feedsArray);

  return finishedLoging ? (
    <View>
      <Text>{JSON.stringify(feeds)}</Text>
    </View>
  ) : (
    <LoginNavigator />
  );
};

export default AppNavigator;
