import axios from "axios";
import { FORGOT_PASSWORD, SIGN_UP } from "./constants";

export const forgotPassword = async (username) => {
  const response = await axios.get(`${FORGOT_PASSWORD}/${username}`);

  return response;
};

export const signUp = async (user) => {
  const response = await axios.post(SIGN_UP, user);
  return response.data;
};
