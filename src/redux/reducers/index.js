import { combineReducers } from "redux";

import {
  LOAD_JSONDATA,
  REMOVE_ITEM,
  CLEAR_DATA,
  CHANGE_PRODUCT_QUANTITY
} from "../types";

const initialState = { cartList: [] };

const cartList = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_JSONDATA:
      return {
        ...state,
        cartList: action.cartList
      };

    case REMOVE_ITEM:
      return {
        ...state,
        cartList: action.cartList
      };

    case CHANGE_PRODUCT_QUANTITY:
      return {
        ...state,
        cartList: action.cartList
      };

    case CLEAR_DATA:
      return initialState;

    default:
      return state;
  }
};

export default combineReducers({
  cartList
});
