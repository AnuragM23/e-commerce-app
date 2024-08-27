import { createContext, useState } from "react";
import all_products from "../assets/all_products";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // console.log(cartItems);
  };

  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find((p) => p.id === Number(item));
        totalAmount += itemInfo.new_price * Number(cartItems[item]);
      }
    }
    // console.log(totalAmount);
    
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for(let item in cartItems) {
        if (cartItems[item] > 0) {
            totalItem += cartItems[item];
        }
    }

    return totalItem;
  }

  const contextValue = {
    getTotalCartItems, 
    getTotalCartAmount,
    all_products,
    cartItems,
    addToCart,
    removeToCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
