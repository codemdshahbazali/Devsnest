import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { place, weatherData } from './actions';

function WeatherSearch({ setNoData }) {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.place);
  const theme = useSelector((state) => state.theme);

  return (
    <div>
      <div className='d-flex p-2 justify-content-center align-items-center mb-5'>
        <input
          className='p-2 me-2 temp-search'
          type='search'
          placeholder='Enter a loaction'
          aria-label='Enter a loaction'
          value={location}
          onChange={(e) => {
            console.log(e.target.value);
            dispatch(place(e.target.value));
          }}
        />
        <button
          className={theme ? 'btn btn-light' : 'btn btn-dark'}
          type='submit'
          onClick={() => {
            dispatch(weatherData(location));
          }}>
          Search
        </button>
      </div>
    </div>
  );
}

export default WeatherSearch;
