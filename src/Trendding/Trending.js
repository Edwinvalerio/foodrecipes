import React, { Component } from "react";
import "./Trending.css";
// import Trendingicon from "";

let len = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default class Trending extends Component {
  render() {
    return (
      <div>
        <div className="flex-container">
          <h1 id="trending-title">TRENDING</h1>
          <div>
            <img
              className="fire-icon"
              src="/media/icon/trending.png"
              alt="fire"
            />
          </div>
        </div>

        <div className="columns horizontal-scrow">
          {len.map((item, index) => (
            <div className="trading-image-cards">
              <div
                className="trending-card-image"
                style={{
                  backgroundImage: `url('https://picsum.photos/200/${Math.floor(
                    Math.random() * 300 + 300
                  )}')`
                }}
              ></div>
              <p className="food-title-trending">Food Title</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
