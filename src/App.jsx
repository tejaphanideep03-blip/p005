import React, { useState } from 'react';
import './App.css';
const App = () => {
  const IMGURL = import.meta.env.BASE_URL;
  const [togglePassword, setTogglePassword] = useState("password");
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState("password");
  const [isLoginView, setIsLoginView] = useState(true);

  function togglePwd(){
    setTogglePassword(togglePassword === "password" ? "text" : "password");
  }
  function toggleConfirmPwd(){
    setToggleConfirmPassword(toggleConfirmPassword === "password" ? "text" : "password");
  }
  function switchView(){
    setIsLoginView(isLoginView === true ? false : true);
  }

  return (
    <div className="app">
      {isLoginView ===true && 
      <div className="login-container">
        <h2>Sign in with email</h2>
        <div className="input-group">
          <img className='left-icon' src={IMGURL + 'mail.png'} alt='' />
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="input-group">
          <img className='left-icon' src={IMGURL + 'lock.png'} alt='' />
          <input type={togglePassword} placeholder="Enter your password" />
          <img className='right-icon' src={IMGURL + 'eye.png'} alt='' onClick={()=>togglePwd()}/>
        </div>
        <div className="forgot-password">
          Forgot <label>Password</label>?
        </div>
        <button type='submit' className="btn">Get Started</button>
        <p>Don't have an Account? <label onClick={()=>switchView()}> Sign Up</label></p>
      </div>
      }

      {isLoginView === false && 
      <div className='signup-container'>
        <h2>Create Account</h2>
        <div className="input-group">
          <img className='left-icon' src={IMGURL + 'user.png'} alt='' />
          <input type="text" placeholder="Enter Your Full Name" />
        </div>
        <div className="input-group">
          <img className='left-icon' src={IMGURL + 'mail.png'} alt='' />
          <input type="text" placeholder="Email" />
        </div>
        <div className="input-group">
          <img className='left-icon' src={IMGURL + 'telephone.png'} alt='' />
          <input type="email" placeholder="Enter Mobile Number" />
        </div>
        <div className="input-group">
          <img className='left-icon' src={IMGURL + 'lock.png'} alt='' />
          <input type={togglePassword} placeholder="Password" />
          <img className='right-icon' src={IMGURL + 'eye.png'} alt='' onClick={()=>togglePwd()}/>
        </div>
        <div className="input-group">
          <img className='left-icon' src={IMGURL + 'lock.png'} alt='' />
          <input type={toggleConfirmPassword} placeholder="Confirm Password" />
          <img className='right-icon' src={IMGURL + 'eye.png'} alt='' onClick={()=>toggleConfirmPwd()}/>
        </div>
        <button type='submit' className="btn">Register</button>
        <p>Already have an Account? <label onClick={()=>switchView()}> Sign In Here </label></p>
      </div>
    }
    </div>
  );
};

export default App;
