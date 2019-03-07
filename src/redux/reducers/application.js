import { SELECT_PAGE, SELECT_PAGE_NO_HISTORY } from '../actions/application';

export const application = (state = { page: 'signin' }, action) => {
  switch (action.type) {
    case SELECT_PAGE:
    case SELECT_PAGE_NO_HISTORY:
      return {
        ...state,
        page: action.page || 'signin',
        data: null,
      };
    default:
      return state;
  }
};
