import React, { useState } from 'react';
import './App.css';
const App = () => {
  const IMGURL=import.meta.env.BASE_URL;
  const [tooglePassword,setTooglePassword]=useState("password");
  const [tooglePasswordConfirm,setTooglePasswordConfirm]=useState("password");
  const [isLoginView, setIsLoginView] = useState(true);
  const [formData, setFormData] = useState({email:"", password:"", fullname: "", mobile: "", cpassword: ""});
  const [errorData, setErrorData]=useState({});

    function tooglePwd(){
      setTooglePassword(tooglePassword==="password"?"text":"password");
    }
    function tooglePwdConfirm(){
      setTooglePasswordConfirm(tooglePasswordConfirm==="password"?"text":"password");
    }
    function switchView(){
      setFormData({fullname: "", email: "", mobile: "" , password: "" , cpassword: ""});
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

      alert("Sign-in successful!");
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

      function signup(){
        if(validatesignup())
          return;
        alert("Successfully Created");
      }

      function validatesignup(){
      let errors={};
      if(formData.fullname.trim()==="")
        errors.fullname=true;
      if(formData.email.trim()==="")
        errors.email=true;
      if(formData.mobile.trim()==="")
        errors.mobile=true;
      if(formData.password.trim()==="")
        errors.password=true;
      if(formData.cpassword.trim()==="")
        errors.cpassword=true;

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
          <input type='text' className={errorData.email ? "error" : ""} placeholder='Enter your email' name='email' value={formData.email} onChange={(e)=>handleInput(e)}/>
        </div>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL+"lock.png"} alt='' />
          <input type={tooglePassword} className={errorData.password ? "error" : ""} placeholder='Enter your password' name='password' value={formData.password} onChange={(e)=>handleInput(e)}/>
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
          <img className='left-icon' src={IMGURL+"user.png"} alt='' />
          <input type='text' className={errorData.fullname ? "error" : ""} placeholder='Full name' name='fullname' value={formData.fullname} onChange={(e)=>handleInput(e)}/>
        </div>
         <div className='input-group'>
          <img className='left-icon' src={IMGURL+"mail.png"} alt='' />
          <input type='text' className={errorData.email ? "error" : ""} placeholder='Enter your email' name='email' value={formData.email} onChange={(e)=>handleInput(e)}/>
        </div>
         <div className='input-group'>
          <img className='left-icon' src={IMGURL+"telephone.png"} alt='' />
          <input type='text' className={errorData.mobile ? "error" : ""} placeholder='Mobile number' name='mobile' value={formData.mobile} onChange={(e)=>handleInput(e)}/>
        </div>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL+"lock.png"} alt='' />
          <input type={tooglePassword} placeholder='Enter your password' className={errorData.password ? "error" : ""} name='password' value={formData.password} onChange={(e)=>handleInput(e)}/>
          <img className='right-icon' src={IMGURL+"eye.png"} alt='' onClick={()=>tooglePwd()} />
        </div><div className='input-group'>
          <img className='left-icon' src={IMGURL+"lock.png"} alt='' />
          <input type={tooglePasswordConfirm} placeholder='Confirm your password' className={errorData.cpassword ? "error" : ""} name='cpassword' value={formData.cpassword} onChange={(e)=>handleInput(e)}/>
          <img className='right-icon' src={IMGURL+"eye.png"} alt='' onClick={()=>tooglePwdConfirm()} />
        </div>
          <button onClick={()=>signup()}>Register</button>
          <p>Already have an account? <label onClick={()=>switchView()}>Login Here</label></p>
      </div>
          }
    </div>
  );
}

export default App;