import React, { createContext, useReducer, ReactNode, useContext } from 'react';
import { Action, cartReducer, CartState, initialState } from '../reducers/cartReducer';

// Create Cart Context
export const CartContext = createContext<{ state: CartState; dispatch: React.Dispatch<Action> } | undefined>(undefined);

// CartProvider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};
