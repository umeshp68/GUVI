import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Apple16Image from './images/Apple16Image.webp';
import Iphone12 from './images/Iphone12.webp'
import Iphone10 from './images/Iphone10.webp'
import Iphone11 from './images/Iphone11.webp'
import Iphone12pro from './images/Iphone12pro.webp'
import Iphonex from './images/Iphonex.webp'



const productsData = [
  {
    id: 1,
    name: 'Iphone 14',
    description: <p>
    Rs 95,000</p>,
    image: Apple16Image, // Replace with the actual image URL
    // Replace with the actual image URL
  },
  
  {
    id: 2,
    name: 'Iphone 12',
    description: <p>
    Rs 78,000</p>,
    image: Iphone12, // Replace with the actual image URL
    // Replace with the actual image URL
  },
  {
    id: 3,
    name: 'Iphone 10',
    description: <p>
    Rs 2,50,000</p>,
    image: Iphone10, // Replace with the actual image URL
    // Replace with the actual image URL
  },
  {
    id: 4,
    name: 'Iphone 11',
    description: <p>
   Rs 1,00,000</p>,
    image: Iphone11, // Replace with the actual image URL
    // Replace with the actual image URL
  },
  {
    id: 5,
    name: 'Iphone X',
    description: <p>
    Rs 65,000.</p>,
    image: Iphonex, // Replace with the actual image URL
    // Replace with the actual image URL
  },
  {
    id: 6,
    name: 'Iphone 12 Pro',
    description: <p>
    Rs 45,000</p>,
    image: Iphone12pro, // Replace with the actual image URL
    // Replace with the actual image URL
  },
  // Add images for the remaining products
  // ...
];


const App = () => {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    setCartQuantity(updatedCart.length);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    setCartQuantity(updatedCart.length);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <span className="app-name">Walmart</span>
        </a>
      </nav>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <h2>Featured Products</h2>
            <div className="row">
              {productsData.map((product) => (
                <div key={product.id} className="col-6 col-md-4 mb-4">
                  <div className="card">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.name}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{product.name}</h6>
                      <p className="card-text">{product.description}</p>
                      {cart.find((item) => item.id === product.id) ? (
                        <button
                          className="btn btn-danger"
                          onClick={() => removeFromCart(product.id)}
                        >
                          Remove from Cart
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary"
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <h3>Cart</h3>
            <p>Quantity: {cartQuantity}</p>
            <ul className="list-group">
              {cart.map((item) => (
                <li key={item.id} className="list-group-item">
                  {item.name}{' '}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;