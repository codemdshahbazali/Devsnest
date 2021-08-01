import React from 'react';
import { Provider } from 'react-redux';
import AddTodos from './AddTodos';
import ListTodos from './ListTodos';
import store from './store';
import './style.css';

function Todos() {
  return (
    <div className='redux-todos-container'>
      <Provider store={store}>
        <AddTodos />
        <ListTodos />
      </Provider>
    </div>
  );
}

export default Todos;
