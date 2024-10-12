import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import { CartItem } from "../reducers/cartReducer";

// Custom hook to use the Cart Context
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }

  const { state, dispatch } = context;

  // Function to add an item to the cart
  const addItem = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  // Function to remove an item from the cart
  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  // Function to update an item in the cart
  const updateItem = (item: CartItem) => {
    dispatch({ type: 'UPDATE_ITEM', payload: item });
  };

  // Function to clear the cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // You can also expose the cart state if needed
  return {
    items: state.items,
    addItem,
    removeItem,
    updateItem,
    clearCart,
  };
};
