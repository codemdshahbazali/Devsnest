import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import WeatherRedux from './WeatherRedux';
import './WeatherRedux.css';

function WeatherMain() {
  return (
    <div>
      <Provider store={store}>
        <WeatherRedux />
      </Provider>
    </div>
  );
}

export default WeatherMain;
