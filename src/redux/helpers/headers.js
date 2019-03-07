import { store } from '../store';

export const xAuth = () => {
  let state = store.getState();
  return state.jwt && state.jwt.headers && state.jwt.headers.authorization
    ? state.jwt.headers.authorization
    : '';
};
