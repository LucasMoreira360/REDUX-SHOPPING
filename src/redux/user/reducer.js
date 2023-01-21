import UserActionTypes from "./action-types";

const initialState = {
  currentUser:null,
};

const useReducer = (state = initialState, action) => {
  switch(action.type){
    case UserActionTypes.LOGIN:
      return {...state, currentUser: action.payload};
    case UserActionTypes.LOGOUT:
      return {...state, currentUser:null} 
    default:
      return state;
  }

  
  // if ( action.type === UserActionTypes.LOGIN){
  //   return {...state,currentUser: action.payload};
  // }
  // if (action.type === UserActionTypes.LOGOUT){
  //   return { ...state,currentUser: null };
  // }

  // return state; 
};

export default useReducer;