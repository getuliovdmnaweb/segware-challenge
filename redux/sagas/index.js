import { call, all } from "redux-saga/effects";
import { watchUser } from "./user";
import { watchFeeds } from "./feeds";

export function* initializeSagas() {
  yield all([call(watchUser), call(watchFeeds)]);
}
