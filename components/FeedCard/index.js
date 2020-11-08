import React from "react";

import { View, StyleSheet, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
  black_pearl,
  dark_gray,
  eclipse,
  persian_red,
} from "../../utils/colors";
import { reactFeed } from "../../redux/actions";
import { TouchableOpacity } from "react-native-gesture-handler";

const FeedCard = ({
  id,
  username,
  time,
  content,
  likes,
  loves,
  activeUserLikedIt,
  activeUserLovedIt,
}) => {
  const dispatch = useDispatch();

  const loveAction = () => {
    const like = activeUserLikedIt === 0 ? false : true;
    const feed = {
      feedId: id,
      like: like,
      love: !activeUserLovedIt,
    };

    dispatch(reactFeed(feed));
  };
  const likeAction = () => {
    const love = activeUserLovedIt === 0 ? false : true;
    const feed = {
      feedId: id,
      like: !activeUserLikedIt,
      love: love,
    };

    dispatch(reactFeed(feed));
  };

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "space-between" }}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{username}</Text>
          <Text style={styles.headerDate}>
            {moment.utc(time).format("DD/MM/YYYY")}
          </Text>
        </View>
        <Text style={styles.content}>{content}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={loveAction}>
            <FontAwesome
              style={{ marginRight: 10 }}
              name={activeUserLovedIt === 0 ? "heart-o" : "heart"}
              size={24}
              color={persian_red}
            />
          </TouchableOpacity>
          <Text style={styles.iconNumber}>{loves}</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={likeAction}>
            <FontAwesome
              style={{ marginRight: 10 }}
              name={activeUserLikedIt === 0 ? "thumbs-o-up" : "thumbs-up"}
              size={24}
              color={eclipse}
            />
          </TouchableOpacity>

          <Text>{likes}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 173,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  headerTitle: { fontSize: 16, fontWeight: "bold", color: black_pearl },
  headerDate: { fontSize: 14, fontWeight: "bold", color: dark_gray },
  content: {
    fontSize: 14,
    fontWeight: "500",
    color: eclipse,
    marginBottom: 20,
  },
  buttonsContainer: { flexDirection: "row", alignItems: "center" },
  iconContainer: {
    flexDirection: "row",
    marginRight: 30,
    alignItems: "center",
  },
  iconNumber: { fontSize: 14, color: black_pearl },
});

export default FeedCard;
