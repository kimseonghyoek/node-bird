import { all, fork, put, delay, takeLatest } from 'redux-saga/effects';
import axios from "axios";
import { LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from '../reducers/user';

function loginAPI(data) {
  return axios.post("/api/login", data)
}

function* logIn(action) {
  try {
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({ 
      type: LOG_IN_FAILURE,
      error: err.response.data
    })
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, logIn)
}

function logoutAPI() {
  return axios.post("/api/logout")
}

function* logout() {
  try {
    // const result = yield call(logoutAPI);
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data
    })
  }
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logout);
}

function signUpAPI() {
  return axios.post("/api/signUp")
}

function* signUp() {
  try {
    // const result = yield call(signUpAPI);
    yield delay(1000)
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data
    })
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp)
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogOut),
    fork(watchSignUp),
  ]);
}