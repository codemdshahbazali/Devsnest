import React, { useState } from 'react';

function IndividualMeme(props) {
  const { url, box_count, id } = props.meme;

  const [memeData, setmemeData] = useState([]);
  const [urlEndpoint, stateurlEndpoint] = useState(url);

  const captionImage = async () => {
    let parameter = '';
    memeData.forEach((element, index) => {
      parameter += `&boxes[${index}][text]=${element}`;
    });
    console.log(parameter);
    const response = await fetch(
      `https://api.imgflip.com/caption_image?template_id=${id}&username=teasty&password=PPS$Asr52ttCfaF${parameter}`
    );

    const responseData = await response.json();

    return responseData;
  };

  return (
    <div className='individual-meme-container'>
      <div
        className='img-container'
        style={{ backgroundImage: `url(${urlEndpoint})` }}></div>
      <div className='individual-box-container'>
        {[...Array(box_count)].map((_, index) => {
          return (
            <input
              key={index}
              type='text'
              placeholder={`Meme Caption ${index + 1}`}
              onChange={(e) => {
                const arrNew = [...memeData];
                console.log(e.target.value);
                arrNew[index] = e.target.value;
                setmemeData(arrNew);
              }}
            />
          );
        })}
      </div>
      <div className='individual-button-container'>
        <button
          type='submit'
          onClick={() => {
            memeData.length > 0
              ? captionImage().then((imgData) => {
                  console.log(imgData.data.url);
                  stateurlEndpoint(imgData.data.url);
                })
              : alert('Please fill at least one of the input');
          }}>
          Create Meme
        </button>
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
