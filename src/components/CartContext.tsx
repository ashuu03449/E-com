"use client";
// components/CartContext.tsx
import { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface ProductList {
  id: string;
  productImageUrl: string;
  productName: string;
  quantity: number;
  unitPrice: number;
}

interface CartContextType {
  cartItems: ProductList[];
  addToCart: (product: ProductList) => void;
  removeFromCart: (id: string) => void;
  increaseItemCount: (id: string) => void;
  decreaseItemCount: (id: string) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<ProductList[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("CART_ITEMS");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const updateCart = (updatedCart: ProductList[]) => {
    localStorage.setItem("CART_ITEMS", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const addToCart = (product: ProductList) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      updateCart(updatedCart);
    } else {
      updateCart([...cartItems, product]);
    }
  };

  const removeFromCart = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  const increaseItemCount = (id: string) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart); // Update cart in the context
  };
  
  const decreaseItemCount = (id: string) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 } : item
    );
    updateCart(updatedCart); // Update cart in the context
  };
  

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseItemCount,
        decreaseItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
