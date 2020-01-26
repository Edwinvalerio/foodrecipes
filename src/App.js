import React from 'react';

import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import './App.css';
import FeaturedCard from './featuredCard/FeaturedCard'


function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        <FeaturedCard />

        <Footer />
      </div>

    </div>
  );
}

export default App;
