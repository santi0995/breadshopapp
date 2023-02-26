import { orderTypes } from '../types';

const { GET_ORDERS, DELETE_ORDERS, GET_ORDERS_SUCESS, GET_ORDERS_FAILURE } = orderTypes;

const initialState = {
  loading: false,
  list: [],
  error: null,
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        loading: true,
      };
    case GET_ORDERS_SUCESS:
      return {
        ...state,
        loading: false,
        list: action.orders,
      };
    case GET_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case DELETE_ORDERS:
      return {
        ...state,
        list: state.list.filter((order) => order.id !== action.id),
      };
    default:
      return state;
  }
};

export default ordersReducer;
