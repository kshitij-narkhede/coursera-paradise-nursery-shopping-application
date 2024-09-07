import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CreatSlice';
import './CartItem.css';

const Cart = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.quantity * parseFloat(item.cost.slice(1)), 0).toFixed(2);
  };

  const calculateTotalCost = (item) => {
    return (item.quantity * parseFloat(item.cost.slice(1))).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    alert("Item Added..");
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
    alert("Item Removed");
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping();
  };

  const handleCheckoutShopping = (e) => {
    e.preventDefault();
    alert('Please Pay Amount using UPI or debit cart !!!.');
  };

  const styleObj = {
    backgroundColor: '#4CAF50',
    color: '#fff!important',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
  };

  const styleObjUl = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
  };

  const styleA = {
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
  };

  return (
    <div>
      <div className="navbar" style={styleObj}>
        <div className="tag">
          <div className="luxury">
          <img src="https://clipart-library.com/new_gallery/362-3623212_the-faraway-tree-day-nursery-logo-tree-black.png" alt="Logo" style={{width:70,borderRadius:40,marginRight:20}} />
            <a href="https://ioborin22.github.io/coursera-paradise-nursery-shopping-application" style={{ textDecoration: 'none' }}>
              <div className="tag_home_link">
                <h3 style={{ color: 'white' }}>Knark Nursery</h3>
                <i style={{ color: 'white' }}>Keep Green , Be Beautiful</i>
              </div>
            </a>
          </div>
        </div>
        <div style={styleObjUl}>
          <div><a href="#" style={styleA}>Plants</a></div>
          <div className="cart-container" onClick={onContinueShopping}>
            <a href="#" style={styleA}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
                <rect width="256" height="256" fill="none"></rect>
                <circle cx="80" cy="216" r="12"></circle>
                <circle cx="184" cy="216" r="12"></circle>
                <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id="mainIconPathAttribute"></path>
              </svg>
              <span className="cart-count">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="cart-container">
        <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>
        <div>
          {cart.map(item => (
            <div className="cart-item" key={item.name}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">{item.cost}</div>
                <div className="cart-item-quantity">
                  <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                  <span className="cart-item-quantity-value">{item.quantity}</span>
                  <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
                </div>
                <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '20px' }} className='total_cart_amount'></div>
        <div className="continue_shopping_btn">
          <button className="get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>
          <br />
          <button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
