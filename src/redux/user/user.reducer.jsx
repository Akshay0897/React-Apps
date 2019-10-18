import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser : null,
    error:null,
    loggingIn:false
}

const userReducer = (  state = INITIAL_STATE  , action) => {
    switch(action.type)
    {
        case UserActionTypes.EMAIL_SIGN_IN_START:
        case UserActionTypes.GOOGLE_SIGN_IN_START:
            return{
                ...state,
                loggingIn:true
            }

        case UserActionTypes.NO_USER_FOUND:
            return {
                ...state,
                loggingIn:false
            }

        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error:null,
                loggingIn:false
            }

        case UserActionTypes.CHECK_USER_SESSION:
            return{
                ...state,
                loggingIn:true
            }
        
        case UserActionTypes.SIGN_IN_FAIL:
        case UserActionTypes.SIGN_OUT_FAIL:
            return {
                ...state,
                error: action.payload,
                loggingIn:false
            }
        
        case UserActionTypes.SIGN_OUT_SUCCESS:

            return {
                ...state,
                currentUser:null,
                error:null,
                loggingIn:false
            }
            
        default : 
            return state; 
    }
}

export default userReducer;