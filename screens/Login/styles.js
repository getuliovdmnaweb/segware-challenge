import { StyleSheet } from "react-native";

import { persian_red } from "../../utils/colors";

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
  loginCard: {
    alignSelf: "center",
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 20,
    height: "75%",
    width: "90%",
    paddingHorizontal: 30,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 20,
  },
  forgotPassword: {
    fontSize: 14,
    fontWeight: "bold",
    color: persian_red,
    alignSelf: "flex-end",
    marginBottom: 40,
  },
  or: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 10,
  },
  activityIndicator: {
    alignSelf: "center",
    position: "absolute",
  },
});
