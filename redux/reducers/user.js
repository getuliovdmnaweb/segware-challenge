import {
  SET_PASSWORD,
  CLEAR_PASSWORD,
  SET_IS_LOGING,
  SET_FINISHED_LOGING,
} from "../actions";
const initialState = {
  password: "",
  isLoging: false,
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
    case SET_IS_LOGING:
      return {
        ...state,
        isLoging: true,
      };
    case SET_FINISHED_LOGING:
      return {
        ...state,
        isLoging: false,
        finishedLoging: action.payload,
      };
    default:
      return state;
  }
};
