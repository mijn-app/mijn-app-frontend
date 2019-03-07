export const REQUEST_OAUTH_INIT = 'REQUEST_OAUTH_INIT';
export const requestOAuthInit = (provider) => ({
  type: REQUEST_OAUTH_INIT,
  provider,
});
export const REQUEST_OAUTH_INIT_SUCCESS = 'REQUEST_OAUTH_INIT_SUCCESS';
export const requestOAuthInitSuccess = (data, headers) => ({
  type: REQUEST_OAUTH_INIT_SUCCESS,
  data,
  headers,
});
export const REQUEST_OAUTH_INIT_FAILURE = 'REQUEST_OAUTH_INIT_FAILURE';
export const requestOAuthInitFailure = (error) => ({
  type: REQUEST_OAUTH_INIT_FAILURE,
  error,
});

export const REQUEST_OAUTH_HANDLE = 'REQUEST_OAUTH_HANDLE';
export const requestOAuthHandle = (code, stateToken, provider) => ({
  type: REQUEST_OAUTH_HANDLE,
  code,
  stateToken,
  provider,
});
export const REQUEST_OAUTH_HANDLE_SUCCESS = 'REQUEST_OAUTH_HANDLE_SUCCESS';
export const requestOAuthHandleSuccess = (data, headers) => ({
  type: REQUEST_OAUTH_HANDLE_SUCCESS,
  data,
  headers,
});
export const REQUEST_OAUTH_HANDLE_FAILURE = 'REQUEST_OAUTH_HANDLE_FAILURE';
export const requestOAuthHandleFailure = (error) => ({
  type: REQUEST_OAUTH_HANDLE_FAILURE,
  error,
});
