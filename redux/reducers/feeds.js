import { SET_FEEDS, CLOSE_FEEDS_MODAL, OPEN_FEEDS_MODAL } from "../actions";

const initialState = {
  feedsArray: [],
};
export const feedsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FEEDS:
      return {
        ...state,
        feedsArray: action.payload,
      };

    default:
      return state;
  }
};
