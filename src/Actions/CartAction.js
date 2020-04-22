import {
  ADD_CART,
  CLEAR_CART,
  EDIT_CART,
  DELETE_CART,
  GET_CART,
} from "../Helper";
import UserApi from "../Apis/UserApi";

const objectApi = "/carts";
export const AddCartAction = (id, item) => async (dispatch) => {
  let response = undefined;
  let res;
  let emptyCart = [];
  try {
    let carts = await UserApi.get(`${objectApi}`);
    let cart = carts?.data.find((c) => c.id === id);
    if (!cart) {
      emptyCart.push(item);
      res = await UserApi.post(`${objectApi}`, {
        id: id,
        items: emptyCart,
      });
    } else {
      cart.items.push(item);
      response = { items: cart.items };
      res = await UserApi.put(`${objectApi}/${id}`, response);
    }
  } catch (e) {
    alert(e);
    return;
  }
  dispatch({ type: ADD_CART, payload: res.data });
};
export const GetCartAction = (id) => async (dispatch) => {
  let response = undefined;
  let res;
  try {
    response = await UserApi.get(`${objectApi}/${id}`);
    if (!response) {
      res = null;
    } else {
      res = response.data;
    }
  } catch (e) {
    console.log(e);
    return;
  }
  dispatch({ type: GET_CART, payload: res });
};

export const DeleteCartAction = (id, index) => async (dispatch) => {
  let response = undefined;
  let res;
  try {
    response = await UserApi.get(`${objectApi}/${id}`);
    if (!response) {
      res = [];
    } else {
      res = response.data.items;
      res = res.filter((r) => res.indexOf(r) !== index);
      response = { items: res };
      res = await UserApi.put(`${objectApi}/${id}`, response);
    }
  } catch (e) {
    console.log(e);
    return;
  }
  dispatch({ type: DELETE_CART, payload: res.data });
};
export const EditCartAction = (id, index, amount) => async (dispatch) => {
  let response = undefined;
  let res;
  try {
    response = await UserApi.get(`${objectApi}/${id}`);
    if (!response) {
      res = [];
    } else {
      res = response.data.items;
      res[index].quality = amount;
      response = { items: res };
      console.log(response);
      res = await UserApi.put(`${objectApi}/${id}`, response);
    }
  } catch (e) {
    console.log(e);
    return;
  }
  dispatch({ type: EDIT_CART, payload: res.data });
};
export const ClearCartAction = () => async (dispatch) => {
  dispatch({ type: CLEAR_CART });
};
