import React, { Component } from "react";
import axios from "axios";
import "./SignUp.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSignUp(e) {
    e.preventDefault();
    if (this.state.password !== this.state.rePassword) {
      alert("password error");
    } else {
      axios
        .post("http://localhost:4000/signup", { SignUpData: this.state })
        .then(function(response) {
          console.log(response.data);
          if (!response.data.succes) alert(response.data.message);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSignUp}>
          <div id="signUp-body">
            <div id="sign-up-container">
              <h1>CREATE YOUR ACCOUNT</h1>

              <div id="form-input-container">
                <div id="signup-fullname-contaner">
                  <div>
                    <p>First Name</p>
                    <input
                      onChange={this.handleChange}
                      required
                      type="text"
                      placeholder=""
                      name="firstName"
                    />
                  </div>
                  <div>
                    <p>Last Name</p>
                    <input
                      onChange={this.handleChange}
                      required
                      type="text"
                      placeholder=""
                      name="lastName"
                    />
                  </div>
                </div>
                <p>User Name</p>
                <input
                  onChange={this.handleChange}
                  required
                  type="text"
                  placeholder=""
                  name="userName"
                />
                <p>Email Address</p>
                <input
                  onChange={this.handleChange}
                  required
                  type="email"
                  placeholder=""
                  name="email"
                />
                <p>Password</p>
                <input
                  onChange={this.handleChange}
                  required
                  type="password"
                  placeholder=""
                  name="password"
                />
                <p>Repeat Password </p>
                <input
                  onChange={this.handleChange}
                  required
                  type="password"
                  placeholder=""
                  name="rePassword"
                />
              </div>
              <button id="signup-btn">Sign Up</button>
              <span id="password-match-error">
                {this.state.password === this.state.rePassword
                  ? null
                  : "password does not match"}
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
