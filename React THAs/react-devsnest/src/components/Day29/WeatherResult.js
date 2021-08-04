import React from 'react';
import { useSelector } from 'react-redux';

function WeatherResult() {
  const { weatherData, place, loading } = useSelector(
    (state) => state.weatherData
  );
  const theme = useSelector((state) => state.theme);
  console.log('Theme from Result', theme);
  const { condition, temp_c, humidity, wind_kph, precip_in } = weatherData;
  return (
    <div className='d-flex justify-content-center'>
      <div
        className={
          theme
            ? 'card align-items-center bg-dark text-white'
            : 'card align-items-center bg-light text-dark '
        }
        style={{ width: '25rem' }}>
        {loading ? (
          <div className='d-flex justify-content-center'>
            <div className='spinner-border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <img
              src={condition?.icon}
              className='card-img-top temp-img'
              alt='...'
            />
            <span className='h1 text-center temp-value'>{temp_c}°C</span>
            <div className='text-center temp-info'>{condition?.text}</div>
            <div className='text-center temp-city'>{place}</div>
            <div className='container mt-3'>
              <div className='row text-center'>
                <div className='col'>
                  <div>Wind Now</div>
                  <div className='temp-val'>
                    {wind_kph} <span className='temp-unit'>KM</span>
                  </div>
                </div>
                <div className='col'>
                  <div>Humidity</div>
                  <div className='temp-val'>
                    {humidity} <span className='temp-unit'>%</span>
                  </div>
                </div>
                <div className='col'>
                  <div>Percipitation</div>
                  <div className='temp-val'>
                    {precip_in} <span className='temp-unit'>%</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default WeatherResult;
