import {
  REQUEST_CONTRACTS,
  REQUEST_CONTRACTS_SUCCESS,
  REQUEST_CONTRACTS_FAILURE,
} from '../actions/contracts';

export const contracts = (state = { data: [] }, action) => {
  switch (action.type) {
    case REQUEST_CONTRACTS:
      return state;
    case REQUEST_CONTRACTS_SUCCESS:
      return {
        ...state,
        data: action.data,
        error: null,
      };
    case REQUEST_CONTRACTS_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
