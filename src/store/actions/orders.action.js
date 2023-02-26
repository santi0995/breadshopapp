import { REALTIME_DATABASE_URL } from '../../constants/firebase/index';
import { orderTypes } from '../types';

const { GET_ORDERS, DELETE_ORDERS, GET_ORDERS_SUCESS, GET_ORDERS_FAILURE } = orderTypes;

export const getOrders = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_ORDERS,
      });
      const response = await fetch(`${REALTIME_DATABASE_URL}/orders.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      const orders = Object.keys(result).map((key) => ({
        ...result[key],
        id: key,
      }));
      dispatch({
        type: GET_ORDERS_SUCESS,
        orders,
      });
    } catch (error) {
      dispatch({
        type: GET_ORDERS_FAILURE,
        error,
      });
    }
  };
};

export const deleteOrder = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${REALTIME_DATABASE_URL}/orders/${id}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      dispatch({
        type: DELETE_ORDERS,
        id,
      });
    } catch (error) {
      dispatch({
        type: DELETE_ORDERS,
        error,
      });
    }
  };
};
