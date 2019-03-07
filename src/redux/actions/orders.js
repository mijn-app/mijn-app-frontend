export const REQUEST_ORDERS_LIST = 'REQUEST_ORDERS_LIST';
export const requestOrdersList = () => ({ type: REQUEST_ORDERS_LIST });

export const REQUEST_ORDERS_LIST_SUCCESS = 'REQUEST_ORDERS_LIST_SUCCESS';
export const requestOrdersListSuccess = (data) => ({
  type: REQUEST_ORDERS_LIST_SUCCESS,
  data,
});

export const REQUEST_ORDERS_LIST_FAILED = 'REQUEST_ORDERS_LIST_FAILED';
export const requestOrdersListFailed = (error) => ({
  type: REQUEST_ORDERS_LIST_FAILED,
  error,
});

export const REQUEST_ORDERS_ITEM = 'REQUEST_ORDERS_ITEM';
export const requestOrdersItem = (id) => ({ type: REQUEST_ORDERS_ITEM, id });

export const REQUEST_ORDERS_ITEM_SUCCESS = 'REQUEST_ORDERS_ITEM_SUCCESS';
export const requestOrdersItemSuccess = (data) => ({
  type: REQUEST_ORDERS_ITEM_SUCCESS,
  data,
});

export const REQUEST_ORDERS_ITEM_FAILED = 'REQUEST_ORDERS_ITEM_FAILED';
export const requestOrdersItemFailed = (error) => ({
  type: REQUEST_ORDERS_ITEM_FAILED,
  error,
});

export const REQUEST_ORDERS_SUBMIT = 'REQUEST_ORDERS_SUBMIT';
export const requestOrdersSubmit = (data) => ({
  type: REQUEST_ORDERS_SUBMIT,
  data,
});

export const REQUEST_ORDERS_SUBMIT_SUCCESS = 'REQUEST_ORDERS_SUBMIT_SUCCESS';
export const requestOrdersSubmitSuccess = () => ({
  type: REQUEST_ORDERS_SUBMIT_SUCCESS,
});

export const REQUEST_ORDERS_SUBMIT_FAILED = 'REQUEST_ORDERS_SUBMIT_FAILED';
export const requestOrdersSubmitFailed = (error) => ({
  type: REQUEST_ORDERS_SUBMIT_FAILED,
  error,
});
