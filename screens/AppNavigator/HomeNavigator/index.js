import React from "react";
import { useSelector } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import Home from "../../Home";

const Drawer = createDrawerNavigator();

const HomeNavigator = () => {
  const userName = useSelector((state) => state.user.name);

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="ios-home" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default HomeNavigator;
