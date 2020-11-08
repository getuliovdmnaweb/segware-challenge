import React, { useCallback } from "react";
import { View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FeedCard } from "../../components";
import { Header } from "../../components";
import { openModal, closeModal } from "../../redux/actions";
import { whisper } from "../../utils/colors";
import { FeedModal } from "./FeedModal";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const modalVisible = useSelector((state) => state.feeds.modalVisible);

  const feedsArray = useSelector((state) => state.feeds.feedsArray);

  const toggleDrawer = useCallback(() => {
    navigation.toggleDrawer();
  });

  const onOpenModal = useCallback(() => {
    dispatch(openModal());
  });

  const onCloseModal = useCallback(() => {
    dispatch(closeModal());
  });

  return (
    <View style={{ flex: 1 }}>
      <Header
        toggleDrawer={toggleDrawer}
        title="Feeds"
        openModal={onOpenModal}
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
      {modalVisible ? <FeedModal closeModal={onCloseModal} /> : null}
    </View>
  );
};

export default Home;
