// CartContext.jsx

import React, { createContext, useContext, useState } from 'react';

// Crea el contexto
const CartContext = createContext();

// Crea el hook useCart
export const useCart = () => {
  return useContext(CartContext);
};

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cartContent, setCartContent] = useState([]);
  
  const addToCart = (item) => {
    setCartContent([...cartContent, item]);
  };

  const removeFromCart = (itemId) => {
    setCartContent(cartContent.filter(item => item.id !== itemId));
  };

  const increaseQuantity = (itemId) => {
    setCartContent(cartContent.map(item => 
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (itemId) => {
    setCartContent((prevCartContent) => {
      const updatedCartContent = prevCartContent.map(item =>
        item.id === itemId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      // Eliminar el artículo si su cantidad llega a 0
      return updatedCartContent.filter(item => item.quantity > 0);
    });
  };

  const clearCart = () => {
    setCartContent([]);
  };

  return (
    <CartContext.Provider value={{ cartContent, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
