import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item._id === product._id);
      if (existing) {
        return prev.map(item =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQty = (productId) => {
    setCartItems(prev =>
      prev.map(item =>
        item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  
  const decreaseQty = (productId) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item._id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0) // remove item if qty goes to 0
    );
  };
  

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart, increaseQty, decreaseQty }}>
      {children}
    </CartContext.Provider>
  );
}
