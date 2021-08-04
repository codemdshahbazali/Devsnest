import React from 'react';

function WeatherSearch() {
  return (
    <div>
      <div className='d-flex p-2 justify-content-center mb-5'>
        <input
          className='me-3 p-1'
          type='search'
          placeholder='Search'
          aria-label='Search'
        />
        <button className='btn btn-dark' type='submit'>
          Search
        </button>
      </div>
    </div>
  );
}

export default WeatherSearch;
