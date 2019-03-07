import { call, put, takeLatest } from 'redux-saga/effects';
import { avgLogsApi } from '../api/avgLogs';
import { xAuth } from '../helpers/headers';
import {
  REQUEST_AVG_LOGS,
  requestAvgLogsSuccess,
  requestAvgLogsFailure,
} from '../actions/avgLogs';

export function* watchRequestAvgLogs() {
  yield takeLatest(REQUEST_AVG_LOGS, fetchAvgLogs);
}

function* fetchAvgLogs() {
  try {
    const result = yield call(avgLogsApi.avgLogs(xAuth()));
    yield put(requestAvgLogsSuccess(result.data));
  } catch (e) {
    yield put(requestAvgLogsFailure(e));
  }
}
