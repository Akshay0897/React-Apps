import { createSelector } from 'reselect';

const selectCart = state => state.cart;
console.log(selectCart);

export const selectCartItems  = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectItemCount = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce((total,cartItem) => total + cartItem.quantity,0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total,cartItem) => total + (cartItem.quantity* cartItem.price),0)
)