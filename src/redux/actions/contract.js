export const REQUEST_CONTRACT = 'REQUEST_CONTRACT';
export const requestContract = (id) => ({ type: REQUEST_CONTRACT, id });
export const REQUEST_CONTRACT_SUCCESS = 'REQUEST_CONTRACT_SUCCESS';
export const requestContractSuccess = (data) => ({
  type: REQUEST_CONTRACT_SUCCESS,
  data,
});
export const REQUEST_CONTRACT_FAILURE = 'REQUEST_CONTRACT_FAILURE';
export const requestContractFailure = (error) => ({
  type: REQUEST_CONTRACT_FAILURE,
  error,
});
export const CLEAR_CONTRACT = 'CLEAR_CONTRACT';
export const clearContract = () => ({ type: CLEAR_CONTRACT });
