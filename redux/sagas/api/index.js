import axios from "axios";
import { FORGOT_PASSWORD, SIGN_UP, SIGN_IN, FEEDS } from "./constants";

export const forgotPassword = async (username) => {
  const response = await axios.get(`${FORGOT_PASSWORD}/${username}`);

  return response;
};

export const signUp = async (user) => {
  const response = await axios.post(SIGN_UP, user);
  return response.data;
};

export const signIn = async (user) => {
  const response = await axios.post(SIGN_IN, user);
  return response.data;
};

export const getFeeds = async (token) => {
  const headers = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(FEEDS, headers);
  return response.data;
};
