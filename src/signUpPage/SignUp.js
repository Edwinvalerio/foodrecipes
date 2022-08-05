/* eslint-disable no-console */
import axios from 'axios';
import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
  const [userDetails, setUserDetails] = useState({});

  const handleChange = (e) => {
    setUserDetails({ [e.target.name]: e.target.value });
  };


  const handleSignUp = (e) => {
    e.preventDefault();
    if (userDetails.password !== userDetails.rePassword) {
      console.log('password error');
    } else {
      axios
        .post('http://localhost:4000/signup', { SignUpData: userDetails })
        .then((response) => {
          console.log(response.data);
          if (!response.data.succes);
          console.log(response.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <div id="signUp-body">
          <div id="sign-up-container">
            <h1>CREATE YOUR ACCOUNT</h1>

            <div id="form-input-container">
              <div id="signup-fullname-contaner">
                <div>
                  <p>First Name</p>
                  <input onChange={handleChange} required type="text" placeholder="" name="firstName" />
                </div>
                <div>
                  <p>Last Name</p>
                  <input onChange={handleChange} required type="text" placeholder="" name="lastName" />
                </div>
              </div>
              <p>User Name</p>
              <input onChange={handleChange} required type="text" placeholder="" name="userName" />
              <p>Email Address</p>
              <input onChange={handleChange} required type="email" placeholder="" name="email" />
              <p>Password</p>
              <input onChange={handleChange} required type="password" placeholder="" name="password" />
              <p>Repeat Password </p>
              <input onChange={handleChange} required type="password" placeholder="" name="rePassword" />
            </div>
            <button type="button" id="signup-btn">
              Sign Up
            </button>
            <span id="password-match-error">{userDetails.password === userDetails.rePassword ? null : 'password does not match'}</span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
