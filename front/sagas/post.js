import { all, fork, delay, put, takeLatest } from 'redux-saga/effects';
import axios from "axios";

export default function* postSaga() {
  function addPostAPI(data) {
    return axios.post("/api/post", data);
  }

  function* addPost(action) {
    try {
      // const result = yield call(addPostAPI, action.data);
      yield delay(1000);
      yield put({
        type: 'ADD_POST_SUCCESS',
      });
    } catch(err) {
      yield put({
        type: 'ADD_POST_FAILURE',
        data: err.response.data
      })
    }
  }

  function* watchAddPost() {
    yield takeLatest('ADD_POST_REQUEST', addPost);
  }

  yield all([
    fork(watchAddPost),
  ]);
}