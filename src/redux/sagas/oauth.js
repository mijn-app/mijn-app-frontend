import { call, put, takeLatest } from 'redux-saga/effects';
import { oauthApi } from "../api/oauth";
import { selectPage } from '../actions/application';
import {
  REQUEST_OAUTH_HANDLE, REQUEST_OAUTH_HANDLE_SUCCESS,
  REQUEST_OAUTH_INIT,
  REQUEST_OAUTH_INIT_SUCCESS,
  requestOAuthHandleFailure,
  requestOAuthHandleSuccess,
  requestOAuthInitFailure,
  requestOAuthInitSuccess,
} from '../actions/oauth';

export function* watchRequestOAuthInit() {
  yield takeLatest(REQUEST_OAUTH_INIT, fetchOAuthInit);
}

function* fetchOAuthInit(action) {
  try {
    const result = yield call(oauthApi.init(action.provider));
    yield put(requestOAuthInitSuccess(result.data, result.headers));
  } catch (e) {
    yield put(requestOAuthInitFailure(e));
  }
}

export function* watchRequestOAuthInitSuccess() {
  yield takeLatest(REQUEST_OAUTH_INIT_SUCCESS, onOAuthInitSuccess);
}

function onOAuthInitSuccess(data) {
  window.location = data.headers.location;
}


export function* watchRequestOAuthHandle() {
  yield takeLatest(REQUEST_OAUTH_HANDLE, fetchOAuthHandle);
}

function* fetchOAuthHandle(action) {
  try {
    const result = yield call(oauthApi.handle(action.code, action.stateToken, action.provider));
    yield put(requestOAuthHandleSuccess(result.data, result.headers));
  } catch (e) {
    yield put(requestOAuthHandleFailure(e));
  }
}

export function* watchRequestOAuthHandleSuccess() {
  yield takeLatest(REQUEST_OAUTH_HANDLE_SUCCESS, onOAuthHandleSuccess);
}

function* onOAuthHandleSuccess() {
  yield put(selectPage('home'));
}
