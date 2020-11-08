import axios from "axios";
import { FORGOT_PASSWORD } from "./constants";

export const forgotPassword = async (username) => {
  const response = await axios.get(`${FORGOT_PASSWORD}/${username}`);

  return response;
};
