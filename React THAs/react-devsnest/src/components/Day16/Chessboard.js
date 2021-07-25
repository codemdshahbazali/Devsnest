import React from 'react';
import './Chessboard.css';
import Chessbox from './Chessbox';

function Chessboard() {
  const generateRow = () => {
    let rows = [];
    for (var i = 0; i < 8; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      rows.push(<Chessbox key={i} />);
    }
    return rows;
  };
  return (
    <div className='chess-container'>
      <div className='chess-box'>
        <div className='row'>{generateRow()}</div>
        <div className='row'>{generateRow()}</div>
        <div className='row'>{generateRow()}</div>
        <div className='row'>{generateRow()}</div>
        <div className='row'>{generateRow()}</div>
        <div className='row'>{generateRow()}</div>
        <div className='row'>{generateRow()}</div>
        <div className='row'>{generateRow()}</div>
      </div>
    </div>
  );
}

export default Chessboard;
