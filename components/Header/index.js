import React from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../IconButton";
import { black_pearl } from "../../utils/colors";

const Header = ({
  toggleDrawer,
  title,
  openModal,
  iconRight,
  headerContainerStyle,
  titleStyle,
}) => {
  return (
    <View style={{ ...styles.header, ...headerContainerStyle }}>
      <IconButton
        iconName="ios-menu"
        iconSize={36}
        iconColor="white"
        onPress={toggleDrawer}
      />
      <Text style={{ ...styles.title, ...titleStyle }}>{title}</Text>
      {iconRight ? (
        <IconButton
          iconName="ios-add-circle-outline"
          iconColor="white"
          iconSize={36}
          onPress={openModal}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: black_pearl,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: { fontSize: 24, fontWeight: "bold", color: "white" },
});

export default Header;
