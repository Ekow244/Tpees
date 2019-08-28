import {UserActionTypes} from './user.types';
//Object that has a type of string values
const INITIAL_STATE={
    currentUser:null
}

const userReducer=(state=INITIAL_STATE,action)=>{
    //Returning actual state of the reducer
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return{
                ...state,
                currentUser:action.payload
            }

        default:
        return state;


    }
}

export default userReducer;