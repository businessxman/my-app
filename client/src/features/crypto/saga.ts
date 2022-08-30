import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { axiosGetContentAction } from "./actions";
import { axiosCreateCryptoUser } from './reducer';

export function* watcherRegister() {
  yield takeLatest(axiosGetContentAction.request, workerRegisterSaga);
}

export function* workerRegisterSaga(action: ReturnType<typeof axiosGetContentAction.request>): Generator {
  try {
    const res = yield call(axiosCreateCryptoUser, action.payload);

    yield put(axiosGetContentAction.success(res as any));
    yield put(axiosGetContentAction.failure({error: ""}));
    window.location.assign('./auth/');
  } catch (err: any) {
    console.log(err.response.data);
    yield put(axiosGetContentAction.failure(err.response.data))
  }
}

export function* cryptoSaga() {
  yield all ([
    fork(watcherRegister),
  ]);
}