import { call, put, takeLatest, select } from "redux-saga/effects";
import { getFeeds } from "../../utils/api";
import { setFeeds, FETCH_FEEDS } from "../actions";

function* fetchFeeds() {
  try {
    const token = yield select((state) => state.user.token);
    const feeds = yield call(() => getFeeds(token));
    yield put(setFeeds(feeds));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

export function* watchFeeds() {
  yield takeLatest(FETCH_FEEDS, fetchFeeds);
}
