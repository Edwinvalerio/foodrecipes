import React, { Component } from "react";
import "./searchCard.css";

export default class searchCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="searchCard-container columns">
          <div
            className="search-card-image"
            style={{
              backgroundImage: `url('https://picsum.photos/200/${Math.floor(
                Math.random() * 300 + 300
              )}')`
            }}
          ></div>
          <div className="column is-6">
            <div>
              <h1 className="seactcard-food-title">{this.props.title}</h1>
              <p>@Stephanie32</p>
            </div>
          </div>
          <div className="column is-2">
            <i class="far fa-clock "></i>

            <span aria-label="sheep " className="hours-to-make">
              3.4hrs
            </span>
          </div>
          <div className="column is-2">
            <h1 className="like-counts">
              <span role="img" aria-label="sheep" className="delicius-emoji">
                😋
              </span>
              <span> 12.2K</span>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
