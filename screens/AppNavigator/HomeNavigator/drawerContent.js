import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";
import { DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { black_pearl, persian_red } from "../../../utils/colors";
import { useDispatch } from "react-redux";
import { signOut } from "../../../redux/actions";

const DrawerContent = (props) => {
  const dispatch = useDispatch();
  return (
    <ScrollView {...props}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.title}>Hi, {props.title}</Text>
      </SafeAreaView>
      <View
        style={{
          flex: 4,
          justifyContent: "space-between",
        }}
      >
        <View>
          <DrawerItemList {...props} />
        </View>
        <DrawerItem
          labelStyle={{ fontSize: 16, fontWeight: "bold" }}
          icon={() => <Ionicons name="md-exit" size={24} color={persian_red} />}
          label="Sign Out"
          inactiveTintColor={persian_red}
          onPress={() => dispatch(signOut())}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: black_pearl,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { color: "white", fontSize: 24, fontWeight: "bold" },
});

export default DrawerContent;
