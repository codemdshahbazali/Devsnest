import React, { useState } from 'react';

function WeatherSearch({ setWeatherData, setlocation, setLoading }) {
  const [place, setPlace] = useState('');

  const fetchWeatherData = (place) => {
    setLoading(true);
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=8540aec6629649ccb01141843210208&q=${place}&aqi=no`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.current);
        setWeatherData(data.current);
        setLoading(false);
      });
  };

  return (
    <div>
      <div className='d-flex p-2 justify-content-center mb-5'>
        <input
          className='me-3 p-1'
          type='search'
          placeholder='Enter a loaction'
          aria-label='Search'
          value={place}
          onChange={(e) => {
            console.log(e.target.value);
            setPlace(e.target.value);
          }}
        />
        <button
          className='btn btn-dark'
          type='submit'
          onClick={() => {
            fetchWeatherData(place);
            setlocation(place);
          }}>
          Search
        </button>
      </div>
    </div>
  );
}

export default WeatherSearch;
