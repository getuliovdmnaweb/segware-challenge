export const SET_ERROR_MESSAGE = "error/SET_ERROR_MESSAGE";
export const setErrorMessage = (errorMessage) => {
  return {
    type: SET_ERROR_MESSAGE,
    payload: errorMessage,
  };
};

export const CLEAR_ERROR_MESSAGE = "error/CLEAR_ERROR_MESSAGE";
export const clearErrorMessage = () => {
  return {
    type: CLEAR_ERROR_MESSAGE,
  };
};
