import { StyleSheet } from "react-native";

import { black_pearl, whisper } from "../../utils/colors";

export default StyleSheet.create({
  container: {
    backgroundColor: "#363636",
    height: "100%",
    justifyContent: "center",
  },
  header: { backgroundColor: "#1A2027", flex: 1 },
  body: { backgroundColor: "#E5E5E5", flex: 2 },
  title: {
    marginTop: 45,
    fontSize: 24,
    fontWeight: "bold",
    color: "#363636",
    alignSelf: "center",
    marginBottom: 35,
  },
  forgotPasswordCard: {
    alignSelf: "center",
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 20,
    height: "75%",
    width: "90%",
    paddingHorizontal: 30,
  },
  or: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 10,
  },
  passwordLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: black_pearl,
  },
  passwordContainer: {
    height: 40,
    backgroundColor: black_pearl,
    borderRadius: 5,
    paddingTop: 10,
    alignItems: "center",
    marginBottom: 60,
  },
});
