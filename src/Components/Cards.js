import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these amazing resources!</h1>
        <div className="cards_container">
          <div className="cards_wrapper">
            <ul className="cards_items">
              <CardItem src='../images/logo1.jpg' text="Contact us today!" label="Adventure" path="/contact" alt='Contact Us!' />
            </ul>
          </div>
        </div>
    </div>
  )
};

export default Cards;