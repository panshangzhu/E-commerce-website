import { LOGIN, LOGOUT } from "../Helper";
import UserApi from "../Apis/UserApi";
const restObj = "/user";
export const loginAction = (formValues) => async (dispatch) => {
  let accounts = undefined;
  let account = undefined;
  let customer = null;
  try {
    let promise = await UserApi.get(restObj);
    accounts=promise.data;
    account = accounts.find((a) => a.email === formValues.email);
    if (!account) {
      alert("email doesnt exit");
      return;
    }
    if (account.password !== formValues.password) {
      alert("password not correct");
      return;
    }
    customer = {id:account.id,name:account.name};
  } catch (e) {
    alert("system error, login failed.Please try agian later"+e);
    return;
  }
  dispatch({ type: LOGIN, payload: customer });
};

export const logoutAction = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
