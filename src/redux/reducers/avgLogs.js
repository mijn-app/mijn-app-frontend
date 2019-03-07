import {
  REQUEST_AVG_LOGS,
  REQUEST_AVG_LOGS_SUCCESS,
  REQUEST_AVG_LOGS_FAILURE,
} from '../actions/avgLogs';

export const avgLogs = (state = { data: [] }, action) => {
  switch (action.type) {
    case REQUEST_AVG_LOGS:
      return state;
    case REQUEST_AVG_LOGS_SUCCESS:
      return {
        ...state,
        data: action.data,
        error: null,
      };
    case REQUEST_AVG_LOGS_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
