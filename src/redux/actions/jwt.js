export const REQUEST_JWT_SIGNIN = 'REQUEST_JWT_SIGNIN';
export const requestJwtSignin = (email, password) => ({
  type: REQUEST_JWT_SIGNIN,
  email,
  password,
});
export const REQUEST_JWT_SIGNIN_SUCCESS = 'REQUEST_JWT_SIGNIN_SUCCESS';
export const requestJwtSigninSuccess = (data, headers) => ({
  type: REQUEST_JWT_SIGNIN_SUCCESS,
  data,
  headers,
});
export const REQUEST_JWT_SIGNIN_FAILURE = 'REQUEST_JWT_SIGNIN_FAILURE';
export const requestJwtSigninFailure = (error) => ({
  type: REQUEST_JWT_SIGNIN_FAILURE,
  error,
});

export const REQUEST_JWT_ELEVATE_WITH_PIN = 'REQUEST_JWT_ELEVATE_WITH_PIN';
export const requestJwtElevateWithPin = (pin) => ({
  type: REQUEST_JWT_ELEVATE_WITH_PIN,
  pin,
});
export const REQUEST_JWT_ELEVATE_WITH_PIN_SUCCESS =
  'REQUEST_JWT_ELEVATE_WITH_PIN_SUCCESS';
export const requestJwtElevateWithPinSuccess = (data, headers) => ({
  type: REQUEST_JWT_ELEVATE_WITH_PIN_SUCCESS,
  data,
  headers,
});
export const REQUEST_JWT_ELEVATE_WITH_PIN_FAILURE =
  'REQUEST_JWT_ELEVATE_WITH_PIN_FAILURE';
export const requestJwtElevateWithPinFailure = (error) => ({
  type: REQUEST_JWT_ELEVATE_WITH_PIN_FAILURE,
  error,
});

export const REQUEST_JWT_RENEW_WITH_PIN = 'REQUEST_JWT_RENEW_WITH_PIN';
export const requestJwtRenewWithPin = (pin) => ({
  type: REQUEST_JWT_RENEW_WITH_PIN,
  pin,
});
export const REQUEST_JWT_RENEW_WITH_PIN_SUCCESS =
  'REQUEST_JWT_RENEW_WITH_PIN_SUCCESS';
export const requestJwtRenewWithPinSuccess = (data, headers) => ({
  type: REQUEST_JWT_RENEW_WITH_PIN_SUCCESS,
  data,
  headers,
});
export const REQUEST_JWT_RENEW_WITH_PIN_FAILURE =
  'REQUEST_JWT_RENEW_WITH_PIN_FAILURE';
export const requestJwtRenewWithPinFailure = (error) => ({
  type: REQUEST_JWT_RENEW_WITH_PIN_FAILURE,
  error,
});

export const REQUEST_JWT_REFRESH = 'REQUEST_JWT_REFRESH';
export const requestJwtRefresh = () => ({ type: REQUEST_JWT_REFRESH });
export const REQUEST_JWT_REFRESH_SUCCESS = 'REQUEST_JWT_REFRESH_SUCCESS';
export const requestJwtRefreshSuccess = (data, headers) => ({
  type: REQUEST_JWT_REFRESH_SUCCESS,
  data,
  headers,
});
export const REQUEST_JWT_REFRESH_FAILURE = 'REQUEST_JWT_REFRESH_FAILURE';
export const requestJwtRefreshFailure = (error) => ({
  type: REQUEST_JWT_REFRESH_FAILURE,
  error,
});
