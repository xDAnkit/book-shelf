//Saga effects
import { all, fork } from 'redux-saga/effects';

// Books
import { watchGetBookListRequest } from '@features/Books/List/saga';

export default function* rootSaga() {
  yield all([fork(watchGetBookListRequest)]);
}
