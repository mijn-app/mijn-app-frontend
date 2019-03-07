import axios from 'axios';
import { BASE_URL_API } from '../store';

export const jwtApi = {
  signin: (email, password) => async () => {
    const response = await axios.post(
      '/jwt/signin',
      {},
      {
        baseURL: BASE_URL_API,
        auth: {
          username: email,
          password: password,
        },
      }
    );
    if (response.statusText === 'OK' || response.status === 200) {
      return { data: response.data, headers: response.headers };
    } else {
      throw response.status;
    }
  },
  elevateWithPin: (pin, token) => async () => {
    const response = await axios.post(
      '/jwt/pin',
      { pin },
      {
        baseURL: BASE_URL_API,
        headers: { 'X-Auth': token },
      }
    );
    if (response.statusText === 'OK' || response.status === 200) {
      return { data: response.data, headers: response.headers };
    } else {
      throw response.status;
    }
  },
  renewWithPin: (pin, token) => async () => {
    const response = await axios.post(
      '/jwt/renew',
      { pin },
      {
        baseURL: BASE_URL_API,
        headers: { 'X-Auth': token },
      }
    );
    if (response.statusText === 'OK' || response.status === 200) {
      return { data: response.data, headers: response.headers };
    } else {
      throw response.status;
    }
  },
  refresh: (token) => async () => {
    const response = await axios.get('/jwt/refresh', {
      baseURL: BASE_URL_API,
      headers: { 'X-Auth': token },
    });
    if (response.statusText === 'OK' || response.status === 200) {
      return { data: response.data, headers: response.headers };
    } else {
      throw response.status;
    }
  },
};
