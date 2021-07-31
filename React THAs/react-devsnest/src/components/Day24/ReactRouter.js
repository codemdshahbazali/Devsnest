import React from 'react';
import HeaderRouter from './HeaderRouter';
import Content from './Content';
import './ReactRouter.css';

function ReactRouter() {
  return (
    <div className='router-container'>
      <HeaderRouter />
      <Content />
    </div>
  );
}

export default ReactRouter;
