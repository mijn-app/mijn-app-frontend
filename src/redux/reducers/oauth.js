import {
  REQUEST_OAUTH_INIT,
  REQUEST_OAUTH_INIT_SUCCESS,
  REQUEST_OAUTH_INIT_FAILURE,
  REQUEST_OAUTH_HANDLE,
  REQUEST_OAUTH_HANDLE_SUCCESS,
  REQUEST_OAUTH_HANDLE_FAILURE,
} from '../actions/oauth';

export const oauth = (state = { data: {}, headers: {} }, action) => {
  switch (action.type) {
    case REQUEST_OAUTH_INIT:
      return state;
    case REQUEST_OAUTH_INIT_SUCCESS:
      return {
        ...state,
        data: { ...state.data, ...action.data },
        headers: { ...state.headers, ...action.headers },
        error: null,
      };
    case REQUEST_OAUTH_INIT_FAILURE:
      return { ...state, error: action.error };
    case REQUEST_OAUTH_HANDLE:
      return state;
    case REQUEST_OAUTH_HANDLE_SUCCESS:
      return {
        ...state,
        provider: 'itsme',
        data: { ...state.data, ...action.data },
        headers: { ...state.headers, ...action.headers },
        error: null,
      };
    case REQUEST_OAUTH_HANDLE_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
