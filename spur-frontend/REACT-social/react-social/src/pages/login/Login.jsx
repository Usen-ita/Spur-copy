import React from 'react'
import { useRef } from 'react';
import ReactDOM from 'react-dom'
import "../login/login.css";
import {loginCall} from "../../apiCalls"
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


export default function Login() {
    const email = useRef();
    const password = useRef();
    const{user, isFetching, error, dispatch} = useContext(AuthContext);

    const handleClick = (e) =>{
        e.preventDefault();
        loginCall({email:email.current.value, password:password.current.value},dispatch);
};

  console.log(user)

  return(
      <div className="login">
          <div className="loginWrapper">
              <div className="loginLeft">
                  <h3 className="loginLogo">Spur</h3>
                  <span className="loginDesc">
                      Share your positivity with the world on Spur
                  </span>
              </div>
              <div className="loginRight">
                  <form className="loginBox" onSubmit={handleClick}>

                      <input
                      placeholder="Email Address"
                      type = "email"
                      required
                      className="loginInput"
                      ref={email}
                      />


                      <input
                      placeholder="Enter Password"
                      type = "password"
                      required
                      minLength = "6"
                      className="loginInput"
                      ref={password}
                      />

                      <button className="loginButton" type = "sumbit" disabled = {isFetching}>{isFetching ? "loading":"Log In"}</button>
                      <span className="loginForgot"> Forgot Password?</span>
                      <button className="loginRegisterButton"> {isFetching ? "loading" : "Create a new account"}</button>
                  </form>
              </div>
          </div>
      </div>
  ) 
}
