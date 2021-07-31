import React, { useEffect, useState } from 'react';
import IndividualMeme from './IndividualMeme';
import Meme from './Meme';
import './MemeList.css';

function MemeList() {
  const [memeDataList, setmemeDataList] = useState([]);
  const [meme, setMeme] = useState(null);

  const getMeme = async () => {
    try {
      const memeResponse = await fetch('https://api.imgflip.com/get_memes');
      const memeJson = await memeResponse.json();

      return memeJson;
    } catch (e) {
      console.log('Error Occured ', e);
    }
  };

  useEffect(() => {
    getMeme().then((memeData) => {
      console.log(memeData.data.memes);
      setmemeDataList(memeData.data.memes);
    });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '10px' }}>
        Meme Generator Templates
      </h1>
      <div className='meme-container-list'>
        {!meme ? (
          memeDataList.map((memeObj, index) => (
            <div
              key={index}
              className='meme-element'
              onClick={() => {
                setMeme(memeObj);
              }}>
              <Meme memeObj={memeObj} key={index} />
            </div>
          ))
        ) : (
          <IndividualMeme meme={meme} setMeme={setMeme} />
        )}
      </div>
    </>
  );
}

export default MemeList;
