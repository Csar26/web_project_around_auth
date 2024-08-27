import React from "react";
import { Link, useHistory } from "react-router-dom";
import * as auth from "../utils/auth"
import { useState } from "react";

export default function Login ({setIsLogged}) {
  const [email, setEmail] = useState('');
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
        setIsLogged(true);
        history.push("/home");
      }
    })
  .catch(console.log)
};


return (
  <>
  <div className="login">
    <p className="login__welcome">Start sesion</p>
  <form className="login_info" onSubmit={handleSubmit}>
    <label htmlFor="email">email address</label>
   <input
   required
   name= "email"
   type= "email" 
   className="login__input"
   value={email}
   onChange={(e) => setEmail(e.target.value)}
    />
    <span className="login__divider"></span>
    <label htmlFor="password"></label>
   <input 
   required
   name="password"
   type= "password" 
   className="login__input"
   value= {password} 
   onChange={(e) => setPassword(e.target.value)} />
   <span className="login__divider"></span>
   <div className="login__button">
   
   <button type="submit" className="login__link">Iniciar sesion</button>
   </div>
  </form>
  <div className="login__signup">
    <p>Are you a member?</p>
    <Link to= "register" className="login__signup">
    Register here
    </Link>

  </div>
  </div>
  
  
  </>

  
);
}