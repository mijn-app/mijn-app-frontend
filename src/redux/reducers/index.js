import { combineReducers } from 'redux';

import * as application from './application';
import * as avgLog from './avgLog';
import * as avgLogs from './avgLogs';
import * as contract from './contract';
import * as contracts from './contracts';
import * as journey from './journey';
import * as journeys from './journeys';
import * as jwt from './jwt';
import * as order from './order';
import * as person from './person';
import * as oauth from './oauth';

export default combineReducers({
  ...application,
  ...avgLog,
  ...avgLogs,
  ...contract,
  ...contracts,
  ...journey,
  ...journeys,
  ...jwt,
  ...order,
  ...person,
  ...oauth,
});
