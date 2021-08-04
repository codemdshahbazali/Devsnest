import React from 'react';
import WeatherResult from './WeatherResult';
import WeatherSearch from './WeatherSearch';
// import './Weather.css';

function WeatherRedux() {
  return (
    <div className='d-flex flex-column align-items-center mt-3'>
      <div className='h1 fs-2 mb-5'>
        Weather App Using Redux and Redux Thunk
      </div>
      <WeatherSearch />
      <WeatherResult />
    </div>
  );
}

export default WeatherRedux;
