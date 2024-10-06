import React from 'react';
import './CSS/Login.css'

function Login() {
  return (
    <div className='login'>

        <div className="login-container">
            <h1>Sign Up</h1>
            <div className="login-fields">
                <input type="text" placeholder='Your Name'/>
                <input type="text" placeholder='Email Address'/>
                <input type="text" placeholder='Password'/>
            </div>
            <button>Continue</button>
            <p className='login-loginquestion'>Already have an account? <span>Login</span> </p>
            <div className="login-agree">
                <input type="checkbox" name='' id=''/>
                <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>
        </div>
    

    </div>
  );
}

export default Login;
