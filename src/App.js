import React from "react";
// import Trending from "./Trendding/Trending";
import Navbar from "./navbar/Navbar";
import { Route } from "react-router";
import FeaturePage from "./featurePage/featurePage";
import "./App.css";
// import FeaturedCard from "./featuredCard/FeaturedCard";
import Footer from "./footer/Footer";
import HomePage from "./homePage/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/feature" component={FeaturePage} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
