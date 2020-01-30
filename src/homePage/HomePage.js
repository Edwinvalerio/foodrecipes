import React, { Component } from "react";
import Trending from "../Trendding/Trending";
import SearchCard from "../searchCard/searchCard";
import "./HomePage.css";

let videos = ["meat", "sushi"];
let selectedVideo = videos[Math.floor(Math.random() * videos.length)];

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div id="video-container">
          <video loop autoPlay id="myVideo">
            <source
              src={window.location.origin + `/media/video/${selectedVideo}.mp4`}
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
        <SearchCard title={"cheese"} />
        <SearchCard title={"cheese"} />
        <SearchCard title={"cheese"} />
        <div className="loadmore-containers">
          <button className="load-more-btn">Load More</button>
        </div>
        <Trending />
      </div>
    );
  }
}
