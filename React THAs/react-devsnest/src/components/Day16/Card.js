import React, { useState } from 'react';
import './Card.css';
import CircleLoader from 'react-spinners/CircleLoader';
import { css } from '@emotion/react';

function Card() {
  const [loading, setloading] = useState(true);
  const override = css`
    display: block;
    margin: 15px auto;
    border-color: red;
  `;

  return (
    <div className='card-container'>
      <div className='card'>
        <div className='image'>
          {!loading ? null : (
            <CircleLoader
              color={'maroon'}
              loading={loading}
              css={override}
              size={200}
            />
          )}
          <img
            style={!loading ? {} : { display: 'none' }}
            src='http://source.unsplash.com/random/300x300'
            alt='description'
            onLoad={() => setloading(false)}
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
