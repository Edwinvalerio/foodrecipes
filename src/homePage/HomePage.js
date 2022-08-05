import React, { useState } from 'react';
import SearchCard from '../searchCard/searchCard';
import Trending from '../Trendding/Trending';
import './HomePage.css';

let videos = ['meat', 'sushi'];
let selectedVideo = videos[Math.floor(Math.random() * videos.length)];

const HomePage = () => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <div id='video-container'>
        <video loop autoPlay id='myVideo'>
          <source src={window.location.origin + `/media/video/${selectedVideo}.mp4`} type='video/mp4' />
        </video>
        <div id='video-cover'>
          <input onChange={handleChange} id='search-bar-home' type='text' placeholder='Search Your Favorite Recipes' />
        </div>
      </div>
      <SearchCard title={'Pizza'} id={1234} />
      <SearchCard title={'HotDogs'} id={1234} />
      <SearchCard title={'pasta'} id={1234} />
      <SearchCard title={'cheese'} id={1234} />
      <SearchCard title={'cheese'} id={1234} />
      <SearchCard title={'cheese'} id={1234} />
      <SearchCard title={'cheese'} id={1234} />
      <div className='loadmore-containers'>
        <button className='load-more-btn'>Load More</button>
      </div>
      <Trending />
    </div>
  );
};

export default HomePage;
