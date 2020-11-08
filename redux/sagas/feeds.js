import { call, put, takeLatest, select } from "redux-saga/effects";
import { getFeeds, reactFeed, postFeed } from "./api";
import {
  setFeeds,
  closeModal,
  setErrorMessage,
  FETCH_FEEDS,
  REACT_FEED,
  POST_FEED,
} from "../actions";

function* fetchFeeds() {
  try {
    const token = yield select((state) => state.user.token);
    const feeds = yield call(() => getFeeds(token));
    yield put(setFeeds(feeds));
  } catch (e) {
    console.log(e.message);
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

function* postFeedSaga(action) {
  try {
    const token = yield select((state) => state.user.token);
    const content = action.payload;
    const response = yield call(() => postFeed(content, token));
    const feeds = yield call(() => getFeeds(token));
    yield put(setFeeds(feeds));
    yield put(closeModal());
  } catch (e) {
    yield put(
      setErrorMessage(`Invalid Message Content: ${e.message.slice(-3)}`)
    );
  }
}

export function* watchFeeds() {
  yield takeLatest(FETCH_FEEDS, fetchFeeds);
  yield takeLatest(REACT_FEED, reactFeedSaga);
  yield takeLatest(POST_FEED, postFeedSaga);
}
