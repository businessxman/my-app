import { all, fork } from 'redux-saga/effects';
import { authSaga } from '../features/auth/saga';
import { cryptoSaga } from '../features/crypto/saga';

export function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(cryptoSaga)
  ]);
}