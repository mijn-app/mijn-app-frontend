import { call, put, takeLatest } from 'redux-saga/effects';
import { avgLogsApi } from '../api/avgLogs';
import { xAuth } from '../helpers/headers';
import {
  REQUEST_AVG_LOG,
  requestAvgLogSuccess,
  requestAvgLogFailure,
} from '../actions/avgLog';

export function* watchRequestAvgLog() {
  yield takeLatest(REQUEST_AVG_LOG, fetchAvgLog);
}

function* fetchAvgLog(action) {
  try {
    const result = yield call(avgLogsApi.avgLog(action.id, xAuth()));
    yield put(requestAvgLogSuccess(result.data));
  } catch (e) {
    yield put(requestAvgLogFailure(e));
  }
}
