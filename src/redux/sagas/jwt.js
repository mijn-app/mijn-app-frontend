import { call, put, takeLatest } from 'redux-saga/effects';
import { jwtApi } from '../api/jwt';
import { xAuth } from '../helpers/headers';
import { selectPage } from '../actions/application';
import {
  REQUEST_JWT_SIGNIN,
  requestJwtSigninSuccess,
  requestJwtSigninFailure,
  REQUEST_JWT_SIGNIN_SUCCESS,
  REQUEST_JWT_ELEVATE_WITH_PIN,
  requestJwtElevateWithPinSuccess,
  requestJwtElevateWithPinFailure,
  REQUEST_JWT_RENEW_WITH_PIN,
  requestJwtRenewWithPinSuccess,
  requestJwtRenewWithPinFailure,
  REQUEST_JWT_REFRESH,
  requestJwtRefreshSuccess,
  requestJwtRefreshFailure,
} from '../actions/jwt';

export function* watchRequestJwtSignin() {
  yield takeLatest(REQUEST_JWT_SIGNIN, fetchJwtSignin);
}

function* fetchJwtSignin(action) {
  try {
    const result = yield call(jwtApi.signin(action.email, action.password));
    yield put(requestJwtSigninSuccess(result.data, result.headers));
  } catch (e) {
    yield put(requestJwtSigninFailure(e));
  }
}

export function* watchJwtSigninSuccess() {
  yield takeLatest(REQUEST_JWT_SIGNIN_SUCCESS, onJwtSigninSuccess);
}

function* onJwtSigninSuccess() {
  yield put(selectPage('home'));
}

export function* watchRequestJwtElevateWithPin() {
  yield takeLatest(REQUEST_JWT_ELEVATE_WITH_PIN, fetchJwtElevateWithPin);
}

function* fetchJwtElevateWithPin(action) {
  try {
    const result = yield call(jwtApi.elevateWithPin(action.pin, xAuth()));
    yield put(requestJwtElevateWithPinSuccess(result.data, result.headers));
  } catch (e) {
    yield put(requestJwtElevateWithPinFailure(e));
  }
}

export function* watchRequestJwtRenewWithPin() {
  yield takeLatest(REQUEST_JWT_RENEW_WITH_PIN, fetchJwtRenewWithPin);
}

function* fetchJwtRenewWithPin(action) {
  try {
    const result = yield call(jwtApi.renewWithPin(action.pin, xAuth()));
    yield put(requestJwtRenewWithPinSuccess(result.data, result.headers));
  } catch (e) {
    yield put(requestJwtRenewWithPinFailure(e));
  }
}

export function* watchRequestJwtRefresh() {
  yield takeLatest(REQUEST_JWT_REFRESH, fetchJwtRefresh);
}

function* fetchJwtRefresh() {
  try {
    const result = yield call(jwtApi.refresh(xAuth()));
    yield put(requestJwtRefreshSuccess(result.data, result.headers));
  } catch (e) {
    yield put(requestJwtRefreshFailure(e));
  }
}
