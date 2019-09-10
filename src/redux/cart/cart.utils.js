export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
   return [...cartItems, { ...cartItemToAdd, quantity: 1 }];

};

export const removeItemFromCart = (cartItems,itemToRemove) => {
  const id = itemToRemove.id;
  return cartItems.filter(item => item.id !== id) 
}

export const removeItemFromCartByOne = (cartItems,itemToRemove) => {
  const id = itemToRemove.id;
  const existingCartItem = cartItems.find(
    itemToRemove => itemToRemove.id === id
  );
  
  if(existingCartItem.quantity === 1)
  {
    return cartItems.filter(item => item.id !== id) 
  }
  return cartItems.map((item) => item.id === id ? {...item,quantity:item.quantity - 1} : item)
}