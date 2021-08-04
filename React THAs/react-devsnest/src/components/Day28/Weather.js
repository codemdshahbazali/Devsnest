import React from 'react';
import WeatherResult from './WeatherResult';
import WeatherSearch from './WeatherSearch';
import './Weather.css';
import { useState } from 'react';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setlocation] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div className='d-flex flex-column align-items-center mt-3'>
      <div className='h1 fs-2 mb-5'>Weather App Using useState Hook</div>
      <WeatherSearch
        setWeatherData={setWeatherData}
        setlocation={setlocation}
        setLoading={setLoading}
      />
      {weatherData ? (
        <WeatherResult weatherData={weatherData} place={location} />
      ) : (
        <div className='card'>Please Enter a correct Location</div>
      )}
    </div>
  );
}

export default Weather;
