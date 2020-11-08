import { combineReducers } from "redux";
import { userReducer } from "./user";
import { errorReducer } from "./error";
import { feedsReducer } from "./feeds";

export default combineReducers({
  user: userReducer,
  error: errorReducer,
  feeds: feedsReducer,
});
