import { call, put, takeLatest } from 'redux-saga/effects';
import { ordersApi } from '../api/orders';
import {
  REQUEST_ORDERS_LIST,
  requestOrdersListSuccess,
  requestOrdersListFailed,
  REQUEST_ORDERS_ITEM,
  requestOrdersItemSuccess,
  requestOrdersItemFailed,
  REQUEST_ORDERS_SUBMIT,
  requestOrdersSubmitSuccess,
  requestOrdersSubmitFailed,
} from '../actions/orders';
import { selectPage } from '../actions/application';
import { xAuth } from '../helpers/headers';

export function* watchRequestOrdersList() {
  yield takeLatest(REQUEST_ORDERS_LIST, fetchOrdersList);
}

function* fetchOrdersList() {
  try {
    const result = yield call(ordersApi.list());
    yield put(requestOrdersListSuccess(result.data));
  } catch (e) {
    yield put(requestOrdersListFailed(e));
  }
}

export function* watchRequestOrdersItem() {
  yield takeLatest(REQUEST_ORDERS_ITEM, fetchOrdersItem);
}

function* fetchOrdersItem(action) {
  try {
    const result = yield call(ordersApi.item(action.id));
    yield put(requestOrdersItemSuccess(result.data));
  } catch (e) {
    yield put(requestOrdersItemFailed(e));
  }
}

export function* watchRequestOrdersSubmit() {
  yield takeLatest(REQUEST_ORDERS_SUBMIT, fetchOrdersSubmit);
}

function* fetchOrdersSubmit(action) {
  try {
    yield call(ordersApi.submit(action.data, xAuth()));
    yield put(requestOrdersSubmitSuccess());
    yield put(selectPage('journeys'));
  } catch (e) {
    yield put(requestOrdersSubmitFailed(e));
  }
}
