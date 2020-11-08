import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, ErrorModal } from "../../components";
import { persian_red, eclipse } from "../../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { postFeed } from "../../redux/actions";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

export const FeedModal = ({ closeModal }) => {
  const [text, setText] = useState("");
  const username = useSelector((state) => state.user.name);
  const errorMessage = useSelector((state) => state.error.errorMessage);
  const dispatch = useDispatch();

  const onChangeText = useCallback(
    (text) => {
      setText(text);
    },
    [text]
  );

  const onPress = () => {
    const content = {
      content: text,
    };
    dispatch(postFeed(content));
  };

  const onCloseModal = () => {
    closeModal();
  };

  return (
    <View style={styles.modal}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{username}</Text>
          <TouchableOpacity onPress={onCloseModal}>
            <Ionicons name="ios-close" size={36} color={persian_red} />
          </TouchableOpacity>
        </View>
        <TextInput
          multiline={true}
          numberOfLines={5}
          style={styles.textBox}
          value={text}
          onChangeText={onChangeText}
          placeholder="Digite o Conteudo do feed"
        ></TextInput>
        <Button onPress={onPress} title="Send"></Button>
      </View>
      {errorMessage !== "" ? <ErrorModal errorMessage={errorMessage} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: eclipse,
    height: windowHeight,
    width: windowWidth,
    position: "absolute",
    opacity: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    height: "45%",
    borderRadius: 10,
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: { fontSize: 16, fontWeight: "bold" },
  textBox: {
    fontSize: 16,
    color: eclipse,
    backgroundColor: "#C5C5C5",
    height: 130,
    borderRadius: 5,
    padding: 15,
    marginBottom: 30,
    textAlignVertical: "top",
  },
});
