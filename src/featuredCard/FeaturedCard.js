import React, { Component } from 'react'
import './FeaturedCard.css'
// import Image from '../../media/pasta.png'

export default class FeaturedCard extends Component {
    render() {
        return (
            <div>
                <div className='featured-card columns'>
                    <div className='column'>
                        <h1>Recipe Contest</h1>
                        <p>Recipe contentest is like our constantly in progess dinner party and are invited</p>
                    </div>
                    <div className='column'>
                        <div className='featured-image' style={{ backgroundImage: "url('http://pngimg.com/uploads/pasta/pasta_PNG96.png')" }}>

                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
