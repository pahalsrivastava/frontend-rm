import { call, put, takeEvery, all } from 'redux-saga/effects';
import { fetchUserSuccess } from './SLICE.JS';

const fetchUser = () => new Promise((res) => 
  setTimeout(() => res({ name: 'Pahal', role: 'Developer' }), 1000)
);

function* fetchUserSaga() {
  try {
    const user = yield call(fetchUser);
    yield put(fetchUserSuccess(user));
  } catch (error) {
    console.error('Error in saga:', error);
  }
}

function* watchUserFetch() {
  yield takeEvery('FETCH_USER', fetchUserSaga);
}

export default function* rootSaga() {
  yield all([watchUserFetch()]);
}
