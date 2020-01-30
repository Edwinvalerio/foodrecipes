import React, { Component } from "react";
import "./featurePage.css";

import FeaturedCard from "../featuredCard/FeaturedCard";
import Trending from "../Trendding/Trending";

export default class featurePage extends Component {
  render() {
    return (
      <div className="container">
        <FeaturedCard />
        <Trending />
      </div>
    );
  }
}
