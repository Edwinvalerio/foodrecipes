import React, { Component } from "react";
import Trending from "../Trendding/Trending";
import SearchCard from "../searchCard/searchCard";
import "./HomePage.css";

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
        <SearchCard title={"Pizza"} />
        <SearchCard title={"HotDogs"} />
        <SearchCard title={"pasta"} />
        <SearchCard title={"cheese"} />
        <Trending title={"Pie"} />
      </div>
    );
  }
}
