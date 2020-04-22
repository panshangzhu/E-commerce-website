import { combineReducers } from "redux";
import { LOGIN, LOGOUT } from "../Helper";
import UserReducer from './UserReducer';
import CartReducer from './CartReducer';

const initState = {
  isLogin: false,
  customer: null,
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLogin: true, customer: action.payload };
    case LOGOUT:
      return { ...state, isLogin: false, customer: null };
    default:
      return state;
  }
};

export default combineReducers({
    loginReducer,
    UserReducer,
    CartReducer
})
