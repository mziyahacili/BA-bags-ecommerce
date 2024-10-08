import React from 'react';
import './CSS/Login.css';

function Login({ onClose }) {
  return (
    <div className="login">
      <div className="login-container">
        <button className="close-button" onClick={onClose}>✖</button>
        <h1>My Bags</h1>
        <p>Please enter your email address to login or create a new profile</p>
        <div className="login-fields">
          <label htmlFor="email">* Email:</label>
          <input type="email" id="email" placeholder='Email Address' required />
          <button type="submit" className="login-button">Continue</button>
        </div>
        <span>* Required fields</span>
      </div>
    </div>
  );
}

export default Login;
