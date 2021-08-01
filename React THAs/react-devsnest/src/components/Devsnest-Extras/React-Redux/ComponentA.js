import React from 'react';
import { useSelector } from 'react-redux';

function ComponentA() {
  const count = useSelector((state) => state.counter);
  return (
    <div className='componentA-container'>
      Component A - State Value from Counter Component = {count}
    </div>
  );
}

export default ComponentA;
