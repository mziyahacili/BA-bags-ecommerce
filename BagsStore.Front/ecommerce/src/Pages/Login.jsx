import React from 'react';
import './CSS/Login.css';

function Login({ onClose }) {
  return (
    <div className="login">
      <div className="login-container">
        
        <div class="login-modal-header">
          <button  onClick={onClose} type="button" class="login-button-close"> 
            <svg width="32" height="32" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="6" cy="6" r="6" fill="#5B5A57"></circle> <path d="M4 4L8.00001 8" stroke="#F2ECE5" stroke-width="0.6" stroke-linejoin="round"></path> <path d="M4 8L5.53846 6.46135" stroke="#F2ECE5" stroke-width="0.6" stroke-linejoin="round"></path> <path d="M6.46143 5.53906L7.99989 4.00042" stroke="#F2ECE5" stroke-width="0.6" stroke-linejoin="round"></path> 
            </svg>
          </button> 
        </div>

        <h1>My Bags</h1>
        <p class="login-modal-text">Please enter your email address to login or create a new profile</p>
        <div className="login-fields">
          <input class="login-input" type="email" id="email" placeholder='Email Address' required />
          <button type="submit" className="login-button">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
