/* eslint-disable react/prefer-stateless-function */
/**
 *
 * NavBar
 *
 */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <nav id="navbar">
            <NavLink id="logo" to="/">
              <span id="go">Go</span>FoodApp
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

NavBar.propTypes = {};

export default NavBar;
