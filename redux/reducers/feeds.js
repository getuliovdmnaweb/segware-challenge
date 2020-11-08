import { SET_FEEDS, CLOSE_FEEDS_MODAL, OPEN_FEEDS_MODAL } from "../actions";

const initialState = {
  feedsArray: [],

  modalVisible: false,
};
export const feedsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FEEDS:
      return {
        ...state,
        feedsArray: action.payload,
      };

    case CLOSE_FEEDS_MODAL:
      return {
        ...state,
        modalVisible: false,
      };
    case OPEN_FEEDS_MODAL:
      return {
        ...state,
        modalVisible: true,
      };

    default:
      return state;
  }
};
