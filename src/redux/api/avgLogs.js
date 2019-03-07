import axios from 'axios';
import { BASE_URL_API } from '../store';

export const avgLogsApi = {
  avgLogs: (token) => async () => {
    const response = await axios.get('/avglogs', {
      baseURL: BASE_URL_API,
      headers: { 'X-Auth': token },
    });
    if (response.statusText === 'OK' || response.status === 200) {
      return { data: response.data };
    } else {
      throw response.status;
    }
  },
  avgLog: (id, token) => async () => {
    const response = await axios.get(`/avglogs/${id}`, {
      baseURL: BASE_URL_API,
      headers: { 'X-Auth': token },
    });
    if (response.statusText === 'OK' || response.status === 200) {
      return { data: response.data };
    } else {
      throw response.status;
    }
  },
};
