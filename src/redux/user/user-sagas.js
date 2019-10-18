import { UserActionTypes } from './user.types';
import { SignInFail , SignInSuccess, SignOutFail ,SignOutSuccess, noUserFound,SignUpFail} from './user.actions'
import {all, call,put,takeLatest } from 'redux-saga/effects';
import { provider, createUserProfileDocument, auth,getCurrentUser } from '../../firebase/firebase.util';



export function* getSnapshotfromUserAuth(user) {
    
    try {  

    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(SignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));

    }catch(err){
        console.log('error message',err)
      yield put(SignInFail(err.message))
    }
}

export function* signInWithGoogle() {

    try {

     const { user } = yield auth.signInWithPopup(provider);
     yield getSnapshotfromUserAuth(user)

    }catch(err){
        console.log('error message',err)
      yield put(SignInFail(err.message))
    }
}

export function* signInWithEmail({payload: {email,password}}) {
    try {
        //console.log(email,password);
        const { user } = yield auth.signInWithEmailAndPassword(email,password);
        yield getSnapshotfromUserAuth(user);

    } catch(err){
        console.log(err)
        yield put(SignInFail(err.message));
    } 
}


export function* isUserAuthenticated() {
   try {
       const user = yield getCurrentUser();
       if(!user)  put(noUserFound());
       yield getSnapshotfromUserAuth(user);

   } catch (error) {
       console.log(error)
       yield put(SignInFail(error))
   }
}

export function* SignOut() {
    try {
        yield auth.signOut();
        yield put(SignOutSuccess())   
    } catch (error) {
        yield put(SignOutFail(error))
    }
}

export function* SignUp({payload: {email,password,displayName}}) {
    try {
        console.log(email,password,displayName)
        const { user } = yield auth.createUserWithEmailAndPassword(email,password,);
        yield createUserProfileDocument(user,displayName).then(console.log('signned up successfully')).catch((err) => {console.log('error',err)})
        yield getSnapshotfromUserAuth(user)    
    } catch (error) {
        yield put(SignUpFail(error))
    }  
}

export function* userSagas() {
    yield all([call(googleSignInStarts),call(emailSignInStarts),call(onCheckUserSession),call(SignOutStart),call(SignUpStart)])
}

export function* googleSignInStarts() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START , signInWithGoogle)
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION , isUserAuthenticated)
}

export function* SignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START , SignOut)
}

export function* SignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START , SignUp)
}

export function* emailSignInStarts() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}