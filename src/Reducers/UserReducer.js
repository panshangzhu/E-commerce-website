import {FETCH_USERS,ADD_USER} from '../Helper'

const initState = {
    users:[],
    user:null,
  };
  
  const UserReducer = (state = initState, action) => {
    switch (action.type) {
      case FETCH_USERS:
        return { ...state, users:action.payload };
      case ADD_USER:
        return { ...state, users:[...state.users,action.payload] };
      default:
        return state;
    }
  };

  export default UserReducer;