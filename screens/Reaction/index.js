import React, { useState, useMemo, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import ReactionTab from "./reactionTab";
import ReactionContent from "./reactionContent";
import { Header } from "../../components";
import { whisper, black_pearl } from "../../utils/colors";
import { useSelector } from "react-redux";

const Reaction = ({ navigation }) => {
  const [isActive, setIsActive] = useState(true);
  const feeds = useSelector((state) => state.feeds.feedsArray);

  const loves = useMemo(
    () => feeds.filter((feed) => feed.activeUserLovedIt !== 0),
    [feeds]
  );
  const likes = useMemo(
    () => feeds.filter((feed) => feed.activeUserLikedIt !== 0),
    [feeds]
  );

  const toggleDrawer = useCallback(() => {
    navigation.toggleDrawer();
  }, []);

  const loveTab = useCallback(() => {
    setIsActive(true);
  });

  const likeTab = useCallback(() => {
    setIsActive(false);
  });

  return (
    <View style={{ flex: 1, backgroundColor: whisper }}>
      <Header
        title="Reaction History"
        headerContainerStyle={{ justifyContent: "flex-start" }}
        titleStyle={{ marginLeft: 30 }}
        toggleDrawer={toggleDrawer}
      />
      <View style={styles.tabContainer}>
        <ReactionTab
          isActive={isActive}
          onPress={loveTab}
          title="Loves"
          iconName="heart"
        />
        <ReactionTab
          isActive={!isActive}
          onPress={likeTab}
          title="Likes"
          iconName="thumbs-up"
        />
      </View>
      {isActive ? (
        <ReactionContent feeds={loves} />
      ) : (
        <ReactionContent feeds={likes} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    height: 40,
    backgroundColor: black_pearl,
    flexDirection: "row",
    width: "100%",
  },
});

export default Reaction;
