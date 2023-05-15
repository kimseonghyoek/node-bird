import { all, fork, put, delay, takeLatest } from 'redux-saga/effects';
import axios from "axios";

export default function* userSaga() {
  function loginAPI(data) {
    return axios.post("/api/login", data)
  }

  function* logIn(action) {
    try {
      yield delay(1000);
      yield put({
        type: 'LOG_IN_SUCCESS',
      });
    } catch (err) {
      yield put({
        type: 'LOG_IN_FAILURE',
        data: err.response.data
      })
    }
  }

  function* watchLogin() {
    yield takeLatest('LOG_IN_REQUEST', logIn())
  }

  function logoutAPI() {
    return axios.post("/api/logout")
  }

  function* logout() {
    try {
      // const result = yield call(logoutAPI);
      yield put({
        type: 'LOG_OUT_SUCCESS',
      });
    } catch (err) {
      yield put({
        type: 'LOG_OUT_FAILURE',
        data: err.response.data
      })
    }
  }

  function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logout);
  }

  yield all([
    fork(watchLogin),
    fork(watchLogOut)
  ]);
}