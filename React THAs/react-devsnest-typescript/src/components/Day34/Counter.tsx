import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DecCounter, IncCounter } from './../../actions';
import { RootState } from './../../reducers';

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  console.log(counter);
  return (
    <div
      style={{ textAlign: 'center', fontSize: '54px', marginBottom: '30px' }}>
      <button
        style={{ fontSize: '44px' }}
        onClick={() => {
          dispatch(DecCounter(2));
        }}>
        -
      </button>
      <span>{counter}</span>
      <button
        style={{ fontSize: '44px' }}
        onClick={() => {
          dispatch(IncCounter(2));
        }}>
        +
      </button>
    </div>
  );
};

export default Counter;
