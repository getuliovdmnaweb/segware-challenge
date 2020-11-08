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

export const SIGN_IN = "user/SIGN_IN";
export const signIn = (user) => {
  return { type: SIGN_IN, payload: user };
};

export const SET_IS_LOGING = "user/SET_IS_LOGING";
export const setIsLoging = (isLoging) => {
  return { type: SET_IS_LOGING, payload: isLoging };
};

export const SET_FINISHED_LOGING = "user/SET_FINISHED_LOGING";
export const setFinishedLoging = () => {
  return { type: SET_FINISHED_LOGING, payload: true };
};

export const SET_TOKEN = "user/SET_TOKEN";
export const setToken = (token) => {
  return { type: SET_TOKEN, payload: token };
};

export const SET_USERNAME = "user/SET_USERNAME";
export const setUserName = (user) => {
  return { type: SET_USERNAME, payload: user.username };
};

export const SIGN_OUT = "user/SIGN_OUT";
export const signOut = () => {
  return { type: SIGN_OUT };
};
