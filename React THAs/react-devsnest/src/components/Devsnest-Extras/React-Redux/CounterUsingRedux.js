import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ComponentA from './ComponentA';
import { incNumbers, decNumbers } from './actions';
import './style.css';

function CounterUsingRedux() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className='redux-counter-container'>
      <h1>Counter Using React Redux</h1>
      <button
        onClick={() => {
          dispatch(incNumbers());
          // dispatch({ type: 'INC_NUMBER' });
        }}>
        +
      </button>
      <div className='counter-value'>{count}</div>
      <button
        onClick={() => {
          dispatch(decNumbers());
          // dispatch({ type: 'DEC_NUMBER' });
        }}>
        -
      </button>
      <ComponentA />
    </div>
  );
}

export default CounterUsingRedux;
