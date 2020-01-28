import React, { Component } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <nav id="navbar">
            <NavLink id="logo" to="/">
              FoodMe
            </NavLink>

            <div id="menu-links">
              <NavLink
                className="nav-links"
                activeClassName="nav-link-active"
                to="/Shop"
              >
                Shop
              </NavLink>
              <NavLink
                className="nav-links"
                activeClassName="nav-link-active"
                to="/Feature"
              >
                Feature
              </NavLink>
              <NavLink
                className="nav-links"
                activeClassName="nav-link-active"
                to="/Hotline"
              >
                Hotline
              </NavLink>
              <NavLink
                className="nav-links"
                activeClassName="nav-link-active"
                to="/explore"
              >
                Explore
              </NavLink>
            </div>
            <div id="nav-btn-container">
              <NavLink
                to="login"
                id="login-btn"
                activeClassName="nav-link-active"
              >
                Log in
              </NavLink>
              <NavLink
                class="filed-btn"
                to="signup"
                activeClassName="nav-link-active"
              >
                Sign Up
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
