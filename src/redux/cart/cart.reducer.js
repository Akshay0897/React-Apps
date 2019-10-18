import { CartActionTypes } from './cart.types';
import { addItemToCart,removeItemFromCart,removeItemFromCartByOne } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type)
    {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state , hidden: !state.hidden
            } 
            break;
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
            break;
        case CartActionTypes.REMOVE_ITEM:
            return{
               ...state,
               cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
            break;    
        case CartActionTypes.REMOVE_ITEM_BY_ONE:
                return{
                   ...state,
                   cartItems: removeItemFromCartByOne(state.cartItems, action.payload)
                }
                break;
        case CartActionTypes.CLEAR_CART:
            return{
                ...state,
                cartItems:[]
            }  
        default: return state;
    }
}

export default cartReducer;