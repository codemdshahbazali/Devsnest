import React, { useContext, useReducer } from 'react';

const CounterContext = React.createContext();

const CounterTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case CounterTypes.INCREMENT: {
      return state + 1;
    }
    case CounterTypes.DECREMENT: {
      return state - 1;
    }
    case CounterTypes.RESET: {
      return 0;
    }
    default: {
      return state;
    }
  }
};

const CounterContextProvider = (props) => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
};

const useCounterContext = () => {
  const context = useContext(CounterContext);
  console.log(context);

  if (!context) {
    throw new Error('Please use the context inside the context provider tree');
  }

  return context;
};

const increment = (dispatch) => {
  try {
    dispatch({ type: CounterTypes.INCREMENT });
    //this error here will not be handled by error bondries
    throw new Error('Inside Incrememnt');
  } catch (e) {
    // throw e;
    console.log(e.message);
  }
};
const decrement = (dispatch) => dispatch({ type: CounterTypes.DECREMENT });

export {
  useCounterContext,
  CounterContextProvider,
  CounterTypes,
  increment,
  decrement,
};
