import React, { useState } from 'react';
import './CounterList.css';

function Counter() {
  const [state, setstate] = useState(0);
  return (
    <div>
      <button
        type='submit'
        onClick={() => {
          setstate((preState) => preState + 1);
        }}>
        {state}
      </button>
    </div>
  );
}

function CounterList() {
  return (
    <div className='counter-container'>
      <div className='counter-list'>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </div>
  );
}

export default CounterList;
