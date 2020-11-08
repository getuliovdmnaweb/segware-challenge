import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { persian_red } from "../../utils/colors";
import { clearErrorMessage } from "../../redux/actions";
import styles from "./styles";
import { generateErrorContent } from "../../utils/errors";

const ErrorModal = ({ errorMessage }) => {
  const dispatch = useDispatch();

  const errorContent = generateErrorContent(errorMessage);

  const onCloseModal = () => {
    dispatch(clearErrorMessage());
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.errorTitle}>{errorMessage}</Text>
          <TouchableOpacity onPress={onCloseModal}>
            <Ionicons name="ios-close" size={36} color={persian_red} />
          </TouchableOpacity>
        </View>
        <View style={styles.errorContentCard}>
          <Text style={styles.errorContentText}>{errorContent}</Text>
        </View>
      </View>
    </View>
  );
};
export default ErrorModal;
