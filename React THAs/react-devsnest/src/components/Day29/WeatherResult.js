import React from 'react';

function WeatherResult() {
  return (
    <div className='d-flex justify-content-center'>
      <div className='card align-items-center' style={{ width: '25rem' }}>
        <img
          src='https://cdn.weatherapi.com/weather/64x64/night/389.png'
          className='card-img-top temp-img'
          alt='...'
        />
        <span className='h1 text-center temp-value'>28.3°</span>
        <div className='text-center temp-info'>
          Moderate or heavy rain with thunder
        </div>
        <div className='text-center temp-city'>Texas</div>
        <div class='container mt-3'>
          <div class='row text-center'>
            <div class='col'>
              <div>Wind Now</div>
              <div className='temp-val'>
                6.8 <span className='temp-unit'>KM</span>
              </div>
            </div>
            <div class='col'>
              <div>Humidity</div>
              <div className='temp-val'>
                79 <span className='temp-unit'>%</span>
              </div>
            </div>
            <div class='col'>
              <div>Percipitation</div>
              <div className='temp-val'>
                0.15 <span className='temp-unit'>%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherResult;
