import React from "react";
import Trending from "./Trendding/Trending";
import Navbar from "./navbar/Navbar";
import { Route, Switch, NavLink, Router } from "react-router";

import "./App.css";
import FeaturedCard from "./featuredCard/FeaturedCard";
import HomePage from "./homePage/HomePage";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Route exact path="/" component={HomePage} />
      </div>
    </div>
  );
}

export default App;
