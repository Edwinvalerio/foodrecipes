import React, { Component } from 'react';
import './Trending.css';

export default class Trending extends Component {
  render() {
    return (
      <div>
        <div className='flex-container'>
          <h1 id='trending-title'>TRENDING</h1>
          <div>
            <img className='fire-icon' src='/media/icon/trending.png' alt='fire' />
          </div>
        </div>
        <div className='columns horizontal-scrow'>
          {/* IMAGE */}
          <div className='trading-image-cards'>
            <div
              className='trending-card-image'
              style={{
                backgroundImage: `url(media/placeholder/pizza.jpg )`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <p className='food-title-trending'>Food Title</p>
          </div>
          {/* IMAGE */}
          {/* IMAGE */}
          <div className='trading-image-cards'>
            <div
              className='trending-card-image'
              style={{
                backgroundImage: `url(media/placeholder/burito.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <p className='food-title-trending'>Food Title</p>
          </div>
          {/* IMAGE */}
          {/* IMAGE */}
          <div className='trading-image-cards'>
            <div
              className='trending-card-image'
              style={{
                backgroundImage: `url(media/placeholder/pancake.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <p className='food-title-trending'>Food Title</p>
          </div>
          {/* IMAGE */}
          {/* IMAGE */}
          <div className='trading-image-cards'>
            <div
              className='trending-card-image'
              style={{
                backgroundImage: `url(media/placeholder/burger.jpg )`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <p className='food-title-trending'>Food Title</p>
          </div>
          {/* IMAGE */}
          {/* IMAGE */}
          <div className='trading-image-cards'>
            <div
              className='trending-card-image'
              style={{
                backgroundImage: `url(media/placeholder/pasta.jpg )`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <p className='food-title-trending'>Food Title</p>
          </div>
          {/* IMAGE */}
          {/* IMAGE */}
          <div className='trading-image-cards'>
            <div
              className='trending-card-image'
              style={{
                backgroundImage: `url(media/placeholder/burito.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <p className='food-title-trending'>Food Title</p>
          </div>
          {/* IMAGE */}
          {/* IMAGE */}
          <div className='trading-image-cards'>
            <div
              className='trending-card-image'
              style={{
                backgroundImage: `url(media/placeholder/pancake.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <p className='food-title-trending'>Food Title</p>
          </div>
          {/* IMAGE */}
          {/* IMAGE */}
          <div className='trading-image-cards'>
            <div
              className='trending-card-image'
              style={{
                backgroundImage: `url(media/placeholder/burger.jpg )`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <p className='food-title-trending'>Food Title</p>
          </div>
          {/* IMAGE */}
          {/* IMAGE */}
          <div className='trading-image-cards'>
            <div
              className='trending-card-image'
              style={{
                backgroundImage: `url(media/placeholder/pasta.jpg )`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <p className='food-title-trending'>Food Title</p>
          </div>
          {/* IMAGE */}
        </div>
      </div>
    );
  }
}
