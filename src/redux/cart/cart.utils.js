export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    //1. Just checking if the cartItem exists in our cartItems, this will return true or false

    //2. If it does just increment its quantity by 1
    // VERY IMPORTANT THIS FOLLOWING IF BLOCK WILL NOT RUN IF IT IS A NEW ITEM 
    if(existingCartItem){
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? 
        {...cartItem, quantity:cartItem.quantity + 1} : cartItem)
    }


    // 3. If the cartItem is not found in our cartItems, we want to return all the cartItem and add that cartItem to the array without
    return [...cartItems, {...cartItemToAdd, quantity:1}]
}