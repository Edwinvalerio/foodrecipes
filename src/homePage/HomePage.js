import React, { Component } from "react";
import Trending from "../Trendding/Trending";
import FeaturedCard from "../featuredCard/FeaturedCard";
import "./HomePage.css";
// import Video from "./";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div id="video-container">
          <video loop autoPlay id="myVideo">
            <source
              src={window.location.origin + "/media/video/meat.mp4"}
              type="video/mp4"
            />
          </video>
          <div id="video-cover">
            <input
              id="search-bar-home"
              type="text"
              placeholder="Search Your Favorite Recipes"
            />
          </div>
        </div>
        <Trending />
        <FeaturedCard />
      </div>
    );
  }
}
