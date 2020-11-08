import React from "react";
import { View, Text, FlatList } from "react-native";
import { whisper } from "../../utils/colors";
import { FeedCard } from "../../components";

const ReactionContent = ({ feeds }) => {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,

        backgroundColor: whisper,
      }}
    >
      <FlatList
        data={feeds}
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
  );
};

export default ReactionContent;
