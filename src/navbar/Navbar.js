import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';
import './Navbar.css';

const Navbar = () => {
  const [loginWindow, setLoginWindow] = useState(true);

  const openLogInWindow = () => {
    setLoginWindow(!loginWindow);
  };
  return (
    <div>
      <div className='container'>
        <nav id='navbar'>
          <NavLink id='logo' to='/'>
            <span id='go'>Go</span>FoodApp
          </NavLink>

          <div id='menu-links'>
            <NavLink className='nav-links' activeClassName='nav-link-active' to='/Shop'>
              Shop
            </NavLink>
            <NavLink className='nav-links' activeClassName='nav-link-active' to='/Feature'>
              Feature
            </NavLink>
            <NavLink className='nav-links' activeClassName='nav-link-active' to='/Hotline'>
              Hotline
            </NavLink>
            <NavLink className='nav-links' activeClassName='nav-link-active' to='/explore'>
              Explore
            </NavLink>
          </div>
          <div id='nav-btn-container'>
            {/* <button
              to="login"
              id="login-btn"
              activeClassName="nav-link-active"
              onClick={this.openLogInWindow}
            >
              Log in
            </button> */}
            <Popup
              trigger={
                <button id='login-btn'>
                  <i className='fas fa-user-alt'></i>
                </button>
              }
              modal
              closeOnDocumentClick
            >
              <div>
                <h1>this will be the login page</h1>
              </div>
            </Popup>
            <NavLink className='filed-btn' to='signup' activeClassName='nav-link-active'>
              Sign Up
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar