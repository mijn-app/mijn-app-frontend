import { all } from 'redux-saga/effects';
import { watchRequestAvgLog } from './avgLog';
import { watchRequestAvgLogs } from './avgLogs';
import { watchRequestContract } from './contract';
import { watchRequestContracts } from './contracts';
import { watchRequestPersonData } from './person';
import {
  watchRequestJwtSignin,
  watchJwtSigninSuccess,
  watchRequestJwtElevateWithPin,
  watchRequestJwtRenewWithPin,
  watchRequestJwtRefresh,
} from './jwt';
import {
  watchRequestOrdersList,
  watchRequestOrdersItem,
  watchRequestOrdersSubmit,
} from './orders';
import { watchSelectPage } from './application';
import {
  watchRequestOAuthInit,
  watchRequestOAuthInitSuccess,
  watchRequestOAuthHandle,
  watchRequestOAuthHandleSuccess,
} from './oauth';

export default function* rootSaga() {
  yield all([
    watchRequestAvgLog(),
    watchRequestAvgLogs(),
    watchRequestContract(),
    watchRequestContracts(),
    watchRequestJwtSignin(),
    watchJwtSigninSuccess(),
    watchRequestJwtElevateWithPin(),
    watchRequestJwtRenewWithPin(),
    watchRequestJwtRefresh(),
    watchSelectPage(),
    watchRequestPersonData(),
    watchRequestOrdersList(),
    watchRequestOrdersItem(),
    watchRequestOrdersSubmit(),
    watchRequestOAuthInit(),
    watchRequestOAuthInitSuccess(),
    watchRequestOAuthHandle(),
    watchRequestOAuthHandleSuccess(),
  ]);
}
