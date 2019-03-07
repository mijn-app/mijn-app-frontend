import { call, put, takeLatest } from 'redux-saga/effects';
import { contractsApi } from '../api/contracts';
import { xAuth } from '../helpers/headers';
import {
  REQUEST_CONTRACTS,
  requestContractsSuccess,
  requestContractsFailure,
} from '../actions/contracts';

export function* watchRequestContracts() {
  yield takeLatest(REQUEST_CONTRACTS, fetchContracts);
}

function* fetchContracts() {
  try {
    const result = yield call(contractsApi.contracts(xAuth()));
    yield put(requestContractsSuccess(result.data));
  } catch (e) {
    yield put(requestContractsFailure(e));
  }
}
