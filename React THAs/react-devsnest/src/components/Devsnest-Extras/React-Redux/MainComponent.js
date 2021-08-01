import React from 'react';
import { Provider } from 'react-redux';
import CounterUsingRedux from './CounterUsingRedux';
import store from './store';

function MainComponent() {
  return (
    <div>
      <Provider store={store}>
        <CounterUsingRedux />
      </Provider>
    </div>
  );
}

export default MainComponent;
