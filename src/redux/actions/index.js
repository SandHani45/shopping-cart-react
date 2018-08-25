import { CHANGE_PRODUCT_QUANTITY } from "./../types";

export const changeProductQuantity = (index, value, cartList, dispatch) => {
  //   Validation
  if (value <= 0) {
    return null;
  }

  let data = cartList[index];
  data = {
    ...data,
    p_quantity: value * 1
  };

  let cartUpdatelist = [];
  cartList.map((d, i) => {
    if (index == i) {
      cartUpdatelist.push(data);
    } else {
      cartUpdatelist.push(cartList[i]);
    }
  });

  dispatch({
    type: CHANGE_PRODUCT_QUANTITY,
    cartList: cartUpdatelist
  });
};
