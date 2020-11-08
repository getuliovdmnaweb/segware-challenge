import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const IconButton = ({ onPress, iconName, iconSize, iconColor }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

export default IconButton;
