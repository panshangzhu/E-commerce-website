import {ADD_USER,FETCH_USERS} from '../Helper'
import UserApi from '../Apis/UserApi'
import history from '../components/history'


const restObj="/user"
export const addUser= formValues => async dispatch => {
    let response = undefined
    try {
       response  = await UserApi.post(restObj,formValues)
       if(response){
         let result=window.confirm('Thank you for your register! Go to Login?');
         if(result==true){
           history.push('/login') 
         }else{
            return;
         }
      }
    } catch (e) {
       alert("system error, Register failed.Please try agian later");
       return;
    }
    dispatch({type: ADD_USER, payload: response.data})
}