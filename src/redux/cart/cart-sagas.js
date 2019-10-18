import {all,call,put,takeLatest} from 'redux-saga/effects';
import { UserActionTypes } from '../user/user.types';
import { clearCart } from './cart.actions';

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS,clearCartSignOut)
}

export function* clearCartSignOut() {
    yield put(clearCart())
}

export function* cartSaga(){
    yield(all([call(onSignOutSuccess)]))
}

