import React from 'react';
import './Card.css';

function Card() {
  return (
    <div className='card-container'>
      <div className='card'>
        <div className='image'>
          <img
            src='http://source.unsplash.com/random/300x300'
            alt='description'
          />
        </div>
        <div className='content'>
          <h1 className='header'>React Card</h1>
          <p>You main THA is to make meme cards</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
