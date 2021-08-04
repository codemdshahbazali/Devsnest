import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WeatherResult from './WeatherResult';
import WeatherSearch from './WeatherSearch';
import { changeTheme } from './actions';

function WeatherRedux() {
  const { weatherData } = useSelector((state) => state.weatherData);
  const dispatch = useDispatch(changeTheme());
  const theme = useSelector((state) => state.theme);
  console.log(theme);

  return (
    <div
      className={
        theme
          ? 'theme-main-container-dark d-flex flex-column'
          : 'd-flex flex-column'
      }
      style={{ height: '100vh' }}>
      <button
        className={
          theme
            ? 'btn btn-light mt-3 me-3 align-self-end'
            : 'btn btn-dark mt-3 me-3 align-self-end'
        }
        onClick={() => {
          dispatch(changeTheme());
        }}>
        {theme ? 'Switch To Light Theme' : 'Switch To Dark Theme'}
      </button>
      <div
        className='d-flex flex-column align-items-center mt-1'
        style={{ marginBottom: '50px' }}>
        <div className='h1 fs-2 mb-5'>
          Weather App Using Redux and Redux Thunk
        </div>
        <WeatherSearch />
        {weatherData ? (
          <WeatherResult />
        ) : (
          <div
            className={
              theme ? 'card  bg-dark text-white' : 'card  bg-light text-dark'
            }>
            Please Enter a correct Location
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherRedux;
