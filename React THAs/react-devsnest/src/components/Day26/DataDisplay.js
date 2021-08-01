import React from 'react';
import { useSelector } from 'react-redux';

function DataDisplay() {
  const userDetails = useSelector((state) => state.updateUser);
  return (
    <div className='data-display-container'>
      <p>
        <span className='data-display-label'>Username: </span>
        <span>{userDetails.username}</span>
      </p>
      <p>
        <span className='data-display-label'>Email: </span>
        <span>{userDetails.email}</span>
      </p>
      <p>
        <span className='data-display-label'>Password: </span>
        <span>{userDetails.password}</span>
      </p>
    </div>
  );
}

export default DataDisplay;
