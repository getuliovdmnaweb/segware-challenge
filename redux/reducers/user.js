import { SET_PASSWORD } from "../actions";
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
    default:
      return state;
  }
};
