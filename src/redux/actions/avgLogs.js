export const REQUEST_AVG_LOGS = 'REQUEST_AVG_LOGS';
export const requestAvgLogs = () => ({ type: REQUEST_AVG_LOGS });
export const REQUEST_AVG_LOGS_SUCCESS = 'REQUEST_AVG_LOGS_SUCCESS';
export const requestAvgLogsSuccess = (data) => ({
  type: REQUEST_AVG_LOGS_SUCCESS,
  data,
});
export const REQUEST_AVG_LOGS_FAILURE = 'REQUEST_AVG_LOGS_FAILURE';
export const requestAvgLogsFailure = (error) => ({
  type: REQUEST_AVG_LOGS_FAILURE,
  error,
});
