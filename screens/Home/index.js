import React, { useCallback } from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { FeedCard } from "../../components";
import { Header } from "../../components";
import { whisper } from "../../utils/colors";

const Home = ({ navigation }) => {
  const feedsArray = useSelector((state) => state.feeds.feedsArray);

  const toggleDrawer = useCallback(() => {
    navigation.toggleDrawer();
  });

  const openModal = useCallback(() => {});

  return (
    <View style={{ flex: 1 }}>
      <Header
        toggleDrawer={toggleDrawer}
        title="Feeds"
        openModal={openModal}
        iconRight={true}
      />
      <View
        style={{
          flex: 1,
          padding: 20,
          backgroundColor: whisper,
        }}
      >
        <FlatList
          data={feedsArray}
          renderItem={({ item }) => (
            <FeedCard
              key={item.id}
              id={item.id}
              username={item.author.username}
              time={item.updatedAt}
              content={item.content}
              likes={item.likes}
              loves={item.loves}
              activeUserLikedIt={item.activeUserLikedIt}
              activeUserLovedIt={item.activeUserLovedIt}
            />
          )}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    </View>
  );
};

export default Home;
