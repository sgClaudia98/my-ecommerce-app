import { Product } from '../types/Product';

// Define the types for the cart items
export interface CartItem extends Product {
  quantity: number;
}

// Define the cart state type
export interface CartState {
  items: CartItem[];
}

// Define action types
export type Action =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string } // Remove item by ID
  | { type: 'UPDATE_ITEM'; payload: CartItem }
  | { type: 'CLEAR_CART' };

// Initial state
export const initialState: CartState = {
  items: [],
};

// Cart reducer function
export const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex >= 0) {
        // Update quantity if item already exists
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, items: updatedItems };
      }
      return { ...state, items: [...state.items, action.payload] };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };

    case 'UPDATE_ITEM': {
      const updatedItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (updatedItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[updatedItemIndex] = action.payload; // Update the item
        return { ...state, items: updatedItems };
      }
      return state;
    }

    case 'CLEAR_CART':
      return initialState; // Reset cart to initial state

    default:
      return state;
  }
};
