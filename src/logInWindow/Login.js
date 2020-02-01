import React, { Component } from "react";
import "./Login.css";

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <div id="login-body">
          <div id="sign-up-container">
            <h1>CREATE YOUR ACCOUNT</h1>
            <div id="form-input-container">
              <div id="login-fullname-contaner">
                <div>
                  <p>First Name</p>
                  <input required type="text" placeholder="" />
                </div>
                <div>
                  <p>Last Name</p>
                  <input required type="text" placeholder="" />
                </div>
              </div>
              <p>User Name</p>
              <input required type="text" placeholder="" />
              <p>Email Address</p>
              <input required type="email" placeholder="" />
              <p>Password</p>
              <input required type="password" placeholder="" />
              <p>Repeat Password</p>
              <input required type="password" placeholder="" />
            </div>
            <button id="login-btn">Sign Up</button>
          </div>
        </div>
      </form>
    );
  }
}
