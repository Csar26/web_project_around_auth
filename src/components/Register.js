import React, { useState } from "react";
import Logo from '../images/Vector.svg'
import { Link, useHistory } from "react-router-dom";
import * as auth from "../utils/auth.js";
import InfoToolTips from "./InfoTooltip.js";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = useState(false);
  const [isFullFill, setIsFullFill] = useState(true);

  const history = useHistory();

  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((email, password)) {
      auth
        .register(email, password)
        .then((res) => {
          console.log(res, res._id);
          if (!res._id) {
            setIsFullFill(false);
          }
          setOpen(true);
          setTimeout(() => {
            history.push("/login");
          }, 4000);
        })
        .catch((error) => {
          console.log(error);
          setOpen(true);
          setIsFullFill(false);
        });
    }
  };

  return (
    <>
      <div className="register">
        <div className="register__place-logo">
       <div className="place-logo_register">
        <img src={Logo} alt="logo Around" className="logo" />
        <div className='register__header'>
       <Link to="login" className='register__header'>
        Sign in
        </Link>

       </div>
       </div>
       </div>
        <p className="register__welcome">Join now</p>
        <form className="register_form" onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <input
            required
            placeholder="Email address"
            name="email"
            type="email"
            className="register__data"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <span className="register__divider"></span>
          <label htmlFor="password"></label>
          <input
            required
            placeholder="Password"
            name="password"
            type="password"
            minLength="8"
            maxLength="15"
            className="register__data"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <span className="register__divider"></span>
          <div className="register__button">
            <button type="submit" className="register__path">
              Sign up
            </button>
          </div>
        </form>
        <div className="register__signin">
          <p>Are you a member?</p>
          <Link to="login" className="register__login-path">
            Sign in here
          </Link>
        </div>
      </div>
      <InfoToolTips
        open={open}
        isFullFill={isFullFill}
        handleClose={() => {
        setOpen(false);
        }}
      />
    </>
  );
}

