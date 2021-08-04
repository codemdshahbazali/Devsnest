import React from 'react';

function WeatherResult(props) {
  const { condition, temp_c, humidity, wind_kph, precip_in } =
    props.weatherData;
  return (
    <div className='d-flex justify-content-center'>
      <div className='card align-items-center' style={{ width: '25rem' }}>
        {props.loading ? (
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
            <span className='h1 text-center temp-value'>{temp_c}°</span>
            <div className='text-center temp-info'>{condition?.text}</div>
            <div className='text-center temp-city'>{props.place}</div>
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
