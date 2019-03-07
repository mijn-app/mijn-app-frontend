import {
  REQUEST_PERSON_DATA,
  REQUEST_PERSON_DATA_SUCCESS,
  REQUEST_PERSON_DATA_FAILURE,
  CLEAR_PERSON_DATA,
} from '../actions/person';

export const person = (state = { data: {} }, action) => {
  switch (action.type) {
    case REQUEST_PERSON_DATA:
      return state;
    case REQUEST_PERSON_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        error: null,
      };
    case REQUEST_PERSON_DATA_FAILURE:
      return { ...state, error: action.error };
    case CLEAR_PERSON_DATA:
      return { data: {} };
    default:
      return state;
  }
};
