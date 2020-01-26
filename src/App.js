import React from 'react';
import logo from './logo.svg';
import Navbar from './navbar/Navbar'
import './App.css';
import FeaturedCard from './featuredCard/FeaturedCard'


function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        <FeaturedCard />

      </div>
    </div>
  );
}

export default App;
