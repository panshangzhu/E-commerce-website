import { ADD_CART, GET_CART, DELETE_CART, EDIT_CART,CLEAR_CART } from "../Helper";

const initialValue = {
  id: null,
  cart: null,
  totalPrice: 0,
};

const getPrice = (items) => {
  let sum = 0;
  for (var i = 0; i < items?.length; i++) {
    sum = sum + items[i].price * items[i].quality;
  }
  if (!sum) {
    return 0;
  } else {
    return sum;
  }
};

const CartReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        id: action.payload.id,
        cart: action.payload.items,
        totalPrice: getPrice(action.payload.items),
      };
    case GET_CART:
      return {
        ...state,
        id: action.payload.id,
        cart: action.payload.items,
        totalPrice: getPrice(action.payload.items),
      };
    case DELETE_CART:
      return {
        ...state,
        id: action.payload.id,
        cart: action.payload.items,
        totalPrice: getPrice(action.payload.items),
      };
    case EDIT_CART:
      return {
        ...state,
        id: action.payload.id,
        cart: action.payload.items,
        totalPrice: getPrice(action.payload.items),
      };
      case CLEAR_CART:
      return {
        ...state,
        id: null,
        cart: null,
        totalPrice: 0,
      };
    default:
      return state;
  }
};
export default CartReducer;
