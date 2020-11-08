import { CLEAR_ERROR_MESSAGE, SET_ERROR_MESSAGE } from "../actions";

const initialState = {
  errorMessage: "",
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case CLEAR_ERROR_MESSAGE:
      return initialState;
    default:
      return state;
  }
};
