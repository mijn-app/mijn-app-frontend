import { call, put, takeLatest } from 'redux-saga/effects';
import { SELECT_PAGE, SELECT_PAGE_NO_HISTORY } from '../actions/application';
import { store } from '../store';
import { clearContract } from '../actions/contract';

export function* watchSelectPage() {
  yield takeLatest(SELECT_PAGE, pageSelected);
}

function* pageSelected(action) {
  yield call(scrollToTop());
  yield call(setHistory(action.page, action.page, action.page));
  let state = store.getState();
  if (
    action.page !== 'contract' &&
    (state && state.contract && state.contract.data && state.contract.data.id)
  ) {
    yield put(clearContract());
  }
}

export function* watchSelectPageNoHistory() {
  yield takeLatest(SELECT_PAGE_NO_HISTORY, pageSelectedNoHistory);
}

function* pageSelectedNoHistory() {
  yield call(scrollToTop());
}

const scrollToTop = () => async () => {
  window.scrollTo(0, 0);
};

const setHistory = (state, title, url) => async () => {
  history.pushState(state, title, url);
};
