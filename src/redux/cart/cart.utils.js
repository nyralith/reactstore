export const addItemToCart = (cartItems, cartItemToAdd) => {
     const existingCartItem = cartItems.find(
          cart => cartItem.id === cartItemToAdd.id
     );
     if (existingCartItem){
          return cartItem.map(cartItem => 
               cartItem.id === cartItemToAdd.id 
               ? {...cartItem, quantity: carItem.quantity + 1}
               : cartItem
               
               )
     }
     return [...cartItems, {...cartItemToAdd, quantity: 1}]
};