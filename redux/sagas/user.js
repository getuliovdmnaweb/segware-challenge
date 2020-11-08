import { call, put, takeLatest } from "redux-saga/effects";
import { forgotPassword, signUp } from "./api";
import { requestMiddleware } from "./api/helpers";
import {
  FORGOT_PASSWORD,
  SIGN_UP,
  setPassword,
  setErrorMessage,
} from "../actions";

function* forgotPasswordSaga(action) {
  try {
    const username = action.payload;
    const response = yield call(() => forgotPassword(username));
    const { data, status } = response;
    status === 200
      ? yield put(setPassword(data.password))
      : yield put(setErrorMessage(`Request failed with status code ${status}`));
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

export function* watchUser() {
  yield takeLatest(FORGOT_PASSWORD, forgotPasswordSaga);
  yield takeLatest(SIGN_UP, signUpUser);
}
