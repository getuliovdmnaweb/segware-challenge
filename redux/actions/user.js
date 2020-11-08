export const FORGOT_PASSWORD = "user/FORGOT_PASSWORD";
export const forgotPassword = (username) => {
  return {
    type: FORGOT_PASSWORD,
    payload: username,
  };
};

export const SET_PASSWORD = "user/SET_PASSWORD";
export const setPassword = (password) => {
  return {
    type: SET_PASSWORD,
    payload: password,
  };
};

export const CLEAR_PASSWORD = "user/CLEAR_PASSWORD";
export const clearPassword = () => {
  return {
    type: CLEAR_PASSWORD,
  };
};

export const SIGN_UP = "user/SIGN_UP";
export const signUp = (user, navigation) => {
  return { type: SIGN_UP, payload: { user, navigation } };
};
