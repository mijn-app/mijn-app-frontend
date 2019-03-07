import { call, put, takeLatest } from 'redux-saga/effects';
import { personApi } from '../api/person';
import { xAuth } from '../helpers/headers';
import {
  REQUEST_PERSON_DATA,
  requestPersonSuccess,
  requestPersonDataFailure,
} from '../actions/person';

export function* watchRequestPersonData() {
  yield takeLatest(REQUEST_PERSON_DATA, fetchPersonData);
}

function* fetchPersonData(action) {
  try {
    const result = yield call(personApi.person(action.id, xAuth()));
    yield put(requestPersonSuccess(result.data));
  } catch (e) {
    yield put(requestPersonDataFailure(e));
  }
}
