import React, { useState } from 'react';
import './App.css';
import Toast from './Toast';

const App = () => {
  const IMGURL=import.meta.env.BASE_URL;
  const [tooglePassword,setTooglePassword]=useState("password");
  const [tooglePasswordConfirm,setTooglePasswordConfirm]=useState("password");
  const [isLoginView, setIsLoginView] = useState(true);
  const [formData, setFormData] = useState({email:"", password:"", name:"", phone:"", confirmPassword:""});
  const [errorData, setErrorData]=useState({});
  const [toast, setToast] = useState({});
  
    function tooglePwd(){
      setTooglePassword(tooglePassword==="password"?"text":"password");
    }
    function tooglePwdConfirm(){
      setTooglePasswordConfirm(tooglePasswordConfirm==="password"?"text":"password");
    }
    function switchView(){
      setErrorData({});
      setFormData({email:"", password:"", name:"", phone:"", confirmPassword:""});
      setIsLoginView(isLoginView===true?false:true);
    }
    function handleInput(e){
      const{name, value}=e.target;
      setFormData({...formData, [name]:value});/*.  (...) used to store the previous value it is called a spread operator*/
    }
    function signIn() {
      if(validatesignin()) 
        // Perform sign-in logic here
      return;
      setToast({type: "Success", message : "From Sign in", id:Date.now()});
    }
    function signUp() {
      if(validatesignup()) 
        // Perform sign-up logic here
      return;
      alert("Sign-up successful!");
    }

    function validatesignin(){
      let errors={};
      if(formData.email.trim()==="")
        errors.email=true;
      if(formData.password.trim()==="")
        errors.password=true;
      setErrorData(errors);
      return Object.keys(errors).length>0;
      }

    function validatesignup(){
      let errors={};
      if(formData.name.trim()==="")
        errors.name=true;
      if(formData.email.trim()==="")
        errors.email=true;
      if(formData.phone.trim()==="")
        errors.phone=true;
      if(formData.password.trim()==="")
        errors.password=true;
      if(formData.confirmPassword.trim()==="")
        errors.confirmPassword=true;
      setErrorData(errors);
      return Object.keys(errors).length>0;
    }

  return (
    <div className='app'>
      {isLoginView === true &&
      <div className='login-container'>
        <h2>Sign in with email</h2>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL+"mail.png"} alt='' />
          <input type='text' className={errorData.email?"error":""} placeholder='Enter your email' name='email' value={formData.email} onChange={(e)=>handleInput(e)}/>
        </div>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL+"lock.png"} alt='' />
          <input type={tooglePassword} className={errorData.password?"error":""} placeholder='Enter your password' name='password' value={formData.password} onChange={(e)=>handleInput(e)}/>
          <img className='right-icon' src={IMGURL+"eye.png"} alt='' onClick={()=>tooglePwd()} />
        </div>
        <div className='forgot-password'>Forgot <label>Password</label>?</div>
        <button onClick={()=>signIn()}>Get Started</button>
        <p>Don't have an account? <label onClick={()=>switchView()}>Sign up </label></p>
      </div>
        }
        {isLoginView === false &&
         <div className='signup-container'>
          <h2>Create Account</h2>
          <div className='input-group'>
          <img className='left-icon'  src={IMGURL+"user.png"} alt='' />
          <input type='text' className={errorData.name?"error":""} placeholder='Full name' name='name' value={formData.name} onChange={(e)=>handleInput(e)}/>
        </div>
         <div className='input-group'>
          <img className='left-icon' src={IMGURL+"mail.png"} alt='' />
          <input type='text' className={errorData.email?"error":""} placeholder='Enter your email' name='email' value={formData.email} onChange={(e)=>handleInput(e)}/>
        </div>
         <div className='input-group'>
          <img className='left-icon' src={IMGURL+"telephone.png"} alt='' />
          <input type='text' className={errorData.phone?"error":""} placeholder='Mobile number' name='phone' value={formData.phone} onChange={(e)=>handleInput(e)}/>
        </div>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL+"lock.png"} alt='' />
          <input type={tooglePassword} className={errorData.password?"error":""} placeholder='Enter your password' name='password' value={formData.password} onChange={(e)=>handleInput(e)}/>
          <img className='right-icon' src={IMGURL+"eye.png"} alt='' onClick={()=>tooglePwd()} />
        </div><div className='input-group'>
          <img className='left-icon' src={IMGURL+"lock.png"} alt='' />
          <input type={tooglePasswordConfirm} className={errorData.confirmPassword?"error":""} placeholder='Confirm your password' name='confirmPassword' value={formData.confirmPassword} onChange={(e)=>handleInput(e)}/>
          <img className='right-icon' src={IMGURL+"eye.png"} alt='' onClick={()=>tooglePwdConfirm()} />
        </div>
          <button onClick={()=>signUp()}>Register</button>
          <p>Already have an account? <label onClick={()=>switchView()}>Login Here</label></p>
      </div>
          }
          <Toast toastData = {toast}/>
    </div>
  );
}

export default App;