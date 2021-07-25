import React from 'react';
import './Chessboard.css';

function ChessboardEnhanced() {
  const startWithBlack = ['b', 'w', 'b', 'w', 'b', 'w', 'b', 'w'];
  const startWithWhite = ['w', 'b', 'w', 'b', 'w', 'b', 'w', 'b'];

  const generateOneRow = (arr) => {
    return arr.map((element, index) => {
      return element === 'w' ? (
        <div className='box' style={{ backgroundColor: 'white' }}></div>
      ) : (
        <div className='box' style={{ backgroundColor: 'black' }}></div>
      );
    });
  };

  const generateRow = () => {
    let rows = [];
    for (var i = 0; i < 4; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      rows.push(generateOneRow(startWithBlack));
      rows.push(generateOneRow(startWithWhite));
    }
    return rows;
  };

  return (
    <div className='chess-container'>
      <div className='chess-box'>{generateRow()}</div>
    </div>
  );
}

export default ChessboardEnhanced;
