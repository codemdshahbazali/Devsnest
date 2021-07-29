import React from 'react';

function Meme(props) {
  const { name, url } = props.memeObj;
  return (
    <>
      <img src={url} alt={name} />
      <p>{name}</p>
    </>
  );
}

export default Meme;
