import { all, call, put, select, takeLatest, fork } from 'redux-saga/effects';
import { 
  axiosGetContentAction,
  axiosSetContentAction, 
  logoutUser, 
  saveToLocalStorage,
} from "./actions";
import { axiosGetUser, axiosSetUser } from './reducer';
import { saveState } from "../../services/local-storage-service";

// wathcer sagas
export function* watcherLoginSaga() {
  yield takeLatest(axiosGetContentAction.request, workerLoginSaga);
}

export function* watcherStorage() {
  yield takeLatest(saveToLocalStorage.request, workerStorageSaga);
}

export function* watcherRegister() {
  yield takeLatest(axiosSetContentAction.request, workerRegisterSaga);
}

export function* watcherLogout() {
  yield takeLatest(logoutUser, workerLogOutSaga);
}

// worker saga
export function* workerStorageSaga(action: ReturnType<typeof saveToLocalStorage.request>): Generator {
  const state = yield select();
  const savedData = yield call(saveState, state);
  yield put(saveToLocalStorage.success());
}

export function* workerLoginSaga(action: ReturnType<typeof axiosGetContentAction.request>): Generator {
  try {
    const res = yield call(axiosGetUser, action.payload);
    // dispatch a success action to the store user data
    yield put(axiosGetContentAction.success(res as any));
    //yield put(saveToLocalStorage.request());
    localStorage.setItem("jwtToken", (res as any).token);
    yield put(axiosGetContentAction.failure({error: ""}));
  } catch (err: any) {
    // dispatch a failure action to the store with the error
    console.log(err.response.data);
    yield put(axiosGetContentAction.failure(err.response.data))
  }
}

export function* workerRegisterSaga(action: ReturnType<typeof axiosSetContentAction.request>): Generator {
  try {
    yield call(axiosSetUser, action.payload);
    yield put(axiosSetContentAction.success());
    window.location.assign('./');
  } catch (err: any) {
    console.log(err.response.data);
    yield put(axiosSetContentAction.failure(err.response.data))
  }
}

export function* workerLogOutSaga(action: ReturnType<typeof logoutUser>): Generator {
  yield put(logoutUser());
}

export function* authSaga() {
  yield all ([
    fork(watcherLoginSaga),
    fork(watcherRegister),
    fork(watcherStorage),
    fork(logoutUser)
  ]);
}