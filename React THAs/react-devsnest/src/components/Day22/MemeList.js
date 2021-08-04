import React, { useEffect, useState } from 'react';
import IndividualMeme from './IndividualMeme';
import Meme from './Meme';
import './MemeList.css';
import { css } from '@emotion/react';
import CircleLoader from 'react-spinners/SyncLoader';

function MemeList() {
  const [memeDataList, setmemeDataList] = useState([]);
  const [meme, setMeme] = useState(null);
  const [loading, setloading] = useState(true);
  const override = css`
    display: block;
    margin: 30vh auto;
    border-color: red;
  `;

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
      setloading(false);
    });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '10px' }}>
        Meme Generator Templates
      </h1>
      <div className='meme-container-list'>
        {!meme ? (
          loading ? (
            <CircleLoader
              color={'grey'}
              loading={loading}
              css={override}
              size={50}
            />
          ) : (
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
          )
        ) : (
          <IndividualMeme meme={meme} setMeme={setMeme} />
        )}
      </div>
    </>
  );
}

export default MemeList;
