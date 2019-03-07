export const saveState = (state) => {
  let stringifiedState = JSON.stringify(state);
  localStorage.setItem('appState', stringifiedState);
};
export const loadState = () => {
  let json = localStorage.getItem('appState') || '{}';
  let state = JSON.parse(json);

  if (state) {
    return state;
  } else {
    return undefined; // To use the defaults in the reducers
  }
};
