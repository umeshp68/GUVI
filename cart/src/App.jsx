import React, { createContext, useContext, useReducer } from 'react';

// Define context
const CartContext = createContext();

// Initial state for the cart
const initialState = {
  items: [], // Array to store cart items
};

// Reducer function to handle actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if item is already in cart
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );

      // If item exists, update quantity
      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, items: updatedItems };
      }

      // Otherwise, add new item to cart
      return { ...state, items: [...state.items, action.payload] };

    case 'REMOVE_FROM_CART':
      // Filter out item with specified ID
      const updatedItems = state.items.filter(
        item => item.id !== action.payload
      );
      return { ...state, items: updatedItems };

    case 'UPDATE_QUANTITY':
      // Find item and update its quantity
      const updatedCart = state.items.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
      return { ...state, items: updatedCart };

    default:
      return state;
  }
};

// Cart provider component
export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Product component to display individual product and add to cart button
const Product = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
  };

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

// Cart component to display cart items and total
const Cart = () => {
  const { cartState, dispatch } = useCart();

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeFromCart = id => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  // Calculate total quantity and amount
  const totalQuantity = cartState.items.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalAmount = cartState.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartState.items.map(item => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>Price: ${item.price}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
            />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount}</p>
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <div>
        <h1>Products</h1>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
        <Cart />
      </div>
    </CartProvider>
  );
};


export default App;
