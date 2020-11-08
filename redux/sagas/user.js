import { call, put, takeLatest, take } from "redux-saga/effects";
import { forgotPassword, signUp, signIn } from "./api";
import { requestMiddleware } from "./api/helpers";
import {
  FORGOT_PASSWORD,
  SIGN_UP,
  SIGN_IN,
  CLEAR_ERROR_MESSAGE,
  fetchFeeds,
  setFinishedLoging,
  setUserName,
  setToken,
  setPassword,
  setErrorMessage,
  setIsLoging,
} from "../actions";

function* forgotPasswordSaga(action) {
  try {
    const username = action.payload;
    const response = yield call(() => forgotPassword(username));
    const { data, status } = response;
    status === 200
      ? yield put(setPassword(data.password))
      : yield put(setErrorMessage(`User not found: ${status}`));
  } catch (e) {
    yield put(setErrorMessage(e.message));
  }
}

function* signUpUser(action) {
  try {
    const { user, navigation } = action.payload;
    const data = yield call(() => signUp(user));
    navigation.goBack();
  } catch (e) {
    yield put(setErrorMessage(e.message));
  }
}

function* signInUser(action) {
  try {
    const user = action.payload;
    const token = yield call(() => signIn(user));
    yield put(setToken(token));
    yield put(setUserName(user));
    yield put(fetchFeeds());
    yield put(setFinishedLoging());
  } catch (e) {
    yield put(
      setErrorMessage(`Invalid Username or Password: ${e.message.slice(-3)}`)
    );
    yield take(CLEAR_ERROR_MESSAGE);

    yield put(setIsLoging(false));
  }
}

export function* watchUser() {
  yield takeLatest(FORGOT_PASSWORD, forgotPasswordSaga);
  yield takeLatest(SIGN_UP, signUpUser);
  yield takeLatest(SIGN_IN, signInUser);
}
