import React from 'react';
import { Provider } from 'react-redux';
import DataDisplay from './DataDisplay';
import UserInput from './UserInput';
import './UserInputStyle.css';
import store from './store';

function UserInputApp() {
  return (
    <div className='react-redux-app-container'>
      <Provider store={store}>
        <UserInput />
        <DataDisplay />
      </Provider>
    </div>
  );
}

export default UserInputApp;
