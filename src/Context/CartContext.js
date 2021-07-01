import React, { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);

  const addItem = (newItem, quantity) => {
    let productIndex = [];
    productIndex = cart.findIndex(
      (product) => newItem.item.id === product.item.item.id,
    );
    if (productIndex === -1) {
      setCart((cart) => [...cart, { newItem, quantity }]);
    } else {
      let updateCart = [...cart];
      updateCart[productIndex].item.quantity += newItem.quantity;
      setCart(updateCart);
    }
    console.log(cart);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
