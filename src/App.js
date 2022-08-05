import React from "react";
// import Trending from "./Trendding/Trending";
import { Route } from "react-router";
import "./App.css";
import FeaturePage from "./featurePage/featurePage";
import Navbar from "./navbar/Navbar";
// import FeaturedCard from "./featuredCard/FeaturedCard";
import Footer from "./footer/Footer";
import HomePage from "./homePage/HomePage";
import SignUp from "./signUpPage/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/feature" component={FeaturePage} />
        <Route exact path="/signup" component={SignUp} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
