import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { black_pearl } from "../../utils/colors";
const windowWidth = Dimensions.get("window").width;

const ReactionTab = ({ isActive, onPress, title, iconName }) => {
  const styles = useStyles(isActive);

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.tabActive}>
        <FontAwesome
          name={iconName}
          size={24}
          color={isActive ? "white" : "#8C8F93"}
        />
        <Text style={styles.tabTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const useStyles = (isActive) =>
  StyleSheet.create({
    button: { flex: 1, width: windowWidth / 2 },
    tabContainer: {
      height: 40,
      backgroundColor: black_pearl,
      flexDirection: "row",
      width: "100%",
    },
    tabActive: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: black_pearl,
      justifyContent: "center",
      alignItems: "center",
      borderBottomWidth: isActive ? 4 : 0,
      borderBottomColor: "white",
    },
    tabTitle: { marginLeft: 10, color: isActive ? "white" : "#8C8F93" },
  });

export default ReactionTab;
