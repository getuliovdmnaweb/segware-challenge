import {
  SET_PASSWORD,
  CLEAR_PASSWORD,
  SET_IS_LOGING,
  SET_FINISHED_LOGING,
  SET_USERNAME,
  SET_TOKEN,
  SIGN_OUT,
} from "../actions";
const initialState = {
  password: "",
  isLoging: false,
  name: "",
  finishedLoging: false,
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
        isLoging: action.payload,
      };
    case SET_FINISHED_LOGING:
      return {
        ...state,
        isLoging: false,
        finishedLoging: action.payload,
      };
    case SET_USERNAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};
