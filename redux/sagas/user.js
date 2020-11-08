import { call, put, takeLatest } from "redux-saga/effects";
import { forgotPassword } from "./api";
import { requestMiddleware } from "./api/helpers";
import { FORGOT_PASSWORD, setPassword, setErrorMessage } from "../actions";

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

export function* watchUser() {
  yield takeLatest(FORGOT_PASSWORD, forgotPasswordSaga);
}
