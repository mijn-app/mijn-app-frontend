import {
  REQUEST_CONTRACT,
  REQUEST_CONTRACT_SUCCESS,
  REQUEST_CONTRACT_FAILURE,
  CLEAR_CONTRACT,
} from '../actions/contract';

export const contract = (state = { data: {} }, action) => {
  switch (action.type) {
    case REQUEST_CONTRACT:
      return state;
    case REQUEST_CONTRACT_SUCCESS:
      return {
        ...state,
        data: action.data,
        error: null,
      };
    case REQUEST_CONTRACT_FAILURE:
      return { ...state, error: action.error };
    case CLEAR_CONTRACT:
      return { data: {} };
    default:
      return state;
  }
};
