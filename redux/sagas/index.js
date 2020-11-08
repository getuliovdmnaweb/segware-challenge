import { call, all } from "redux-saga/effects";
import { watchUser } from "./user";

export function* initializeSagas() {
  yield all([call(watchUser)]);
}
