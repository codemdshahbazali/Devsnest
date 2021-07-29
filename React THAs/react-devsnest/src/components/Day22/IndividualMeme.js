import React from 'react';

function IndividualMeme(props) {
  console.log(props.meme);
  const { url, box_count, id, name } = props.meme;
  return (
    <div className='individual-meme-container'>
      <div
        className='img-container'
        style={{ backgroundImage: `url(${url})` }}></div>
      <div className='individual-box-container'>
        {[...Array(box_count)].map((_, index) => {
          return (
            <input type='text' placeholder={`Meme Caption ${index + 1}`} />
          );
        })}
      </div>
      <div className='individual-button-container'>
        <button type='submit'>Create Meme</button>
        <button
          type='submit'
          onClick={() => {
            props.setMeme(null);
          }}>
          Choose Template
        </button>
      </div>
    </div>
  );
}

export default IndividualMeme;
