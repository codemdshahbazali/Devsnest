import React from 'react';
import { Provider } from 'react-redux';
import EcommerceLandingPage from './EcommerceLandingPage';
import store from '../redux/store';
import { Route, Switch } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import './EcommerceToolkit.css';
import ProductCart from './ProductCart';
import EommerceHeader from './EommerceHeader';

function EcommerceNew() {
  return (
    <div>
      <Provider store={store}>
        <EommerceHeader />
        <Switch>
          <Route exact path='/Day31'>
            <EcommerceLandingPage />
          </Route>
          <Route exact path='/Day31/cart'>
            <ProductCart />
          </Route>
          <Route path='/Day31/:id'>
            <ProductDetails />
          </Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default EcommerceNew;
