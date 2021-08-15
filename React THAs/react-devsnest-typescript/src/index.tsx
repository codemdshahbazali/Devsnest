import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* <App title='Hello Iqra' desc='She is a gem' /> */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
