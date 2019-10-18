import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})


export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
})

export const removeItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const removeItemByOne = (item) => ({
    type: CartActionTypes.REMOVE_ITEM_BY_ONE,
    payload: item
})