import React, { Component } from "react";
import Trending from "../Trendding/Trending";
import SearchCard from "../searchCard/searchCard";
import "./HomePage.css";

let videos = ["meat", "sushi"];
let selectedVideo = videos[Math.floor(Math.random() * videos.length)];

export default class HomePage extends Component {
  render() {
    return (
      <div>
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
        <Trending
          title={"Pie"}
          imageUrl={[
            "",
            "media/placeholder/burito.jpg",
            "media/placeholder/pancake.jpg"
          ]}
        />
      </div>
    );
  }
}
