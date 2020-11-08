import { call, put, takeLatest } from "redux-saga/effects";
import { forgotPassword } from "./api";
import { FORGOT_PASSWORD, setPassword } from "../actions";

function* forgotPasswordSaga(action) {
  try {
    const username = action.payload;
    const data = yield call(() => forgotPassword(username));
    console.log(data);
    yield put(setPassword(data.password));
  } catch (e) {
    yield put(setErrorMessage(e));
  }
}

export function* watchUser() {
  yield takeLatest(FORGOT_PASSWORD, forgotPasswordSaga);
}
