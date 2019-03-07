export const REQUEST_CONTRACTS = 'REQUEST_CONTRACTS';
export const requestContracts = () => ({ type: REQUEST_CONTRACTS });
export const REQUEST_CONTRACTS_SUCCESS = 'REQUEST_CONTRACTS_SUCCESS';
export const requestContractsSuccess = (data) => ({
  type: REQUEST_CONTRACTS_SUCCESS,
  data,
});
export const REQUEST_CONTRACTS_FAILURE = 'REQUEST_CONTRACTS_FAILURE';
export const requestContractsFailure = (error) => ({
  type: REQUEST_CONTRACTS_FAILURE,
  error,
});
