import { StyleSheet, Dimensions } from "react-native";

import { whisper, black_pearl } from "../../utils/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    backgroundColor: "#363636",
    position: "absolute",
    width: windowWidth,
    height: windowHeight,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9,
  },
  card: {
    backgroundColor: "white",
    height: "40%",
    width: "90%",
    borderRadius: 10,
    padding: 20,
    justifyContent: "space-evenly",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  errorTitle: { fontSize: 18, fontWeight: "bold" },
  errorContentCard: {
    height: "70%",
    backgroundColor: black_pearl,
    borderRadius: 5,
    padding: 15,
  },
  errorContentText: {
    color: whisper,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "monospace",
  },
});
