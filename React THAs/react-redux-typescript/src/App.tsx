import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Counter from './components/Counter';
import Note from './components/Note';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Note />
    </Provider>
  );
}

export default App;
