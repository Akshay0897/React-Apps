import { UserActionTypes } from './user.types';

export const setCurrentUser = (user) => ({
    type:UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const noUserFound = () => ({
    type:UserActionTypes.NO_USER_FOUND
})

export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload:emailAndPassword
});

export const SignInSuccess = (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload:user
});

export const SignInFail = (err) => ({
    type: UserActionTypes.SIGN_IN_FAIL,
    payload:err.message
});


export const SignUpStart = (emailAndPasswordAndDisplayName) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload:emailAndPasswordAndDisplayName
});

export const SignUpSuccess = (user) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload:user
});

export const SignUpFail = (err) => ({
    type: UserActionTypes.SIGN_UP_FAIL,
    payload:err.message
});

export const SignOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
});

export const SignOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const SignOutFail = (error) => ({
    type: UserActionTypes.SIGN_OUT_FAIL,
    payload:error
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
})