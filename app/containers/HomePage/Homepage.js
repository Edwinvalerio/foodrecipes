/* eslint-disable jsx-a11y/media-has-caption */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
// import Header from '../../components/Header/Header.js';
// import Footer from '../../components/Footer/Footer.js';
import { Helmet } from 'react-helmet-async';
import SearchCard from 'components/SearchCard';
import Trending from 'components/Trending';

const videos = ['meat', 'sushi'];
const selectedVideo = videos[Math.floor(Math.random() * videos.length)];

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div>
          <div id="video-container">
            <video loop autoPlay id="myVideo">
              <source
                src={`${window.location.origin}/media/video/${selectedVideo}.mp4`}
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
          <SearchCard title="Pizza" />
          <SearchCard title="HotDogs" />
          <SearchCard title="pasta" />
          <SearchCard title="cheese" />
          <Trending
            title="Pie"
            imageUrl={[
              '',
              'media/placeholder/burito.jpg',
              'media/placeholder/pancake.jpg',
            ]}
          />
        </div>
      </article>
    );
  }
}
