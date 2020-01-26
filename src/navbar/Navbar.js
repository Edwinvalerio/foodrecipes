import React, { Component } from 'react'
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <nav id="navbar">
                        <h1>FOODIMA</h1>
                        <div id='menu-links'>
                            <li>Shop</li>
                            <li>Feature</li>
                            <li>Hotline</li>
                            <li>Recipe</li>
                        </div>
                        <div id='nav-btn-container'>
                            <a>Log in</a>
                            <button class='filed-btn'>Sign Up</button>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
