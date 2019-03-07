export const REQUEST_AVG_LOG = 'REQUEST_AVG_LOG';
export const requestAvgLog = (id) => ({ type: REQUEST_AVG_LOG, id });
export const REQUEST_AVG_LOG_SUCCESS = 'REQUEST_AVG_LOG_SUCCESS';
export const requestAvgLogSuccess = (data) => ({
  type: REQUEST_AVG_LOG_SUCCESS,
  data,
});
export const REQUEST_AVG_LOG_FAILURE = 'REQUEST_AVG_LOG_FAILURE';
export const requestAvgLogFailure = (error) => ({
  type: REQUEST_AVG_LOG_FAILURE,
  error,
});
export const CLEAR_AVG_LOG = 'CLEAR_AVG_LOG';
export const clearAvgLog = () => ({ type: CLEAR_AVG_LOG });
