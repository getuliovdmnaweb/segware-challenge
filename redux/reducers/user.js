import { SET_PASSWORD, CLEAR_PASSWORD } from "../actions";
const initialState = {
  password: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case CLEAR_PASSWORD:
      return initialState;
    default:
      return state;
  }
};
