import React from 'react';
import { Provider } from 'react-redux';
import EcommerceLandingPage from './EcommerceLandingPage';
import { store } from './store';
import './Ecommerce.css';

function Ecommerce() {
  return (
    <div>
      <Provider store={store}>
        <EcommerceLandingPage />
      </Provider>
    </div>
  );
}

export default Ecommerce;
