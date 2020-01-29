import React, { Component } from "react";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="columns">
          <div className="column is-5">
            <h6>About</h6>
            <p class="text-justify">
              .com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to help the
              upcoming programmers with the code. focuses on providing the most
              efficient code or snippets as the code wants to be simple. We will
              help programmers build up concepts in different programming
              languages that include C, C++, Java, HTML, CSS, Bootstrap,
              JavaScript, PHP, Android, SQL and Algorithm.
            </p>
          </div>
          <div className="column">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
          </div>
          <div className="column">
            <h6>Follow Us</h6>
            <ul class="footer-links">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-pinterest"></i>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
