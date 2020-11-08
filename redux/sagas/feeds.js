import { call, put, takeLatest, select } from "redux-saga/effects";
import { getFeeds, reactFeed } from "./api";
import { setFeeds, FETCH_FEEDS, REACT_FEED } from "../actions";

function* fetchFeeds() {
  try {
    const token = yield select((state) => state.user.token);
    const feeds = yield call(() => getFeeds(token));
    yield put(setFeeds(feeds));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* reactFeedSaga(action) {
  try {
    const token = yield select((state) => state.user.token);
    const reactedFeed = action.payload;

    const response = yield call(() => reactFeed(reactedFeed, token));

    const feeds = yield call(() => getFeeds(token));

    yield put(setFeeds(feeds));
  } catch (e) {
    console.log(e.message);
  }
}

export function* watchFeeds() {
  yield takeLatest(FETCH_FEEDS, fetchFeeds);
  yield takeLatest(REACT_FEED, reactFeedSaga);
}
