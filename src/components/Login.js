import React from "react";
import Logo from '../images/Vector.svg'
import { Link, useHistory } from "react-router-dom";
import * as auth from "../utils/auth"
import { useState } from "react";

export default function Login ({setIsLogged, email, setEmail}) {
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password){
      return;
    }
    auth
    .login(email, password)
    .then((res) => {
      if(res.token){
        localStorage.setItem("jwt", res.token);
        setIsLogged(true);
        history.push("/home");
      }
    })
  .catch(console.log)
};


return (
  <>
  <div className="login">
  <div className="place-logo_login">
        <img src={Logo} alt="logo Around" className="logo" />
        <div className='login__header'>
    <Link to="register" className="login__header">
      Join now
    </Link>
      </div>
      </div>
    <p className="login__welcome">Sign in</p>
  <form className="login_form" onSubmit={handleSubmit}>
    <label htmlFor="email"></label>
   <input
   required
   placeholder="Email address"
   name= "email"
   type= "email" 
   className="login__data"
   value={email}
   onChange={(e) => setEmail(e.target.value)}
    />
    <span className="login__divider"></span>
    <label htmlFor="password"></label>
   <input 
   required
   placeholder="Password"
   name="password"
   type= "password" 
   className="login__data"
   value= {password} 
   onChange={(e) => setPassword(e.target.value)} />
   <span className="login__divider"></span>
   <div className="login__button">
   
   <button type="submit" className="login__path">Sign in</button>
   </div>
  </form>
  <div className="login__signup">
    <p>Aren't you a member yet?</p>
    <Link to= "register" className="login__signup-path">
    Join now
    </Link>

  </div>
  </div>
  
  
  </>

  
);
}