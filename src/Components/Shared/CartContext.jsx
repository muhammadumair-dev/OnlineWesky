import { createContext, useState } from "react";
import { DiVim } from "react-icons/di";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setIsVisible(true);
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  return (
<div claasName="" >    <CartContext.Provider value={{ cart, setCart, addToCart, removeItem, updateQuantity, isVisible, setIsVisible }}>
      {children}
    </CartContext.Provider>
</div>
  );
}

export default CartProvider;
