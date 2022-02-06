import {
  useCounterContext,
  // CounterTypes,
  increment,
  decrement,
} from './Context/CouterContext';
import { useErrorHandler } from 'react-error-boundary';

function Counter() {
  const { count, dispatch } = useCounterContext();
  const handleError = useErrorHandler();

  if (count > 10) throw new Error('Numbers above 10 are not allowed');
  console.log({ count, dispatch });

  const add = (dispatch) => {
    try {
      increment(dispatch);
      throw new Error('Inside Error Incrememnt');
    } catch (e) {
      console.log(e.message);
      handleError(e);
    }
  };
  return (
    <div>
      {/* <button onClick={() => dispatch({ type: CounterTypes.INCREMENT })}> */}
      <button onClick={() => increment(dispatch)}>Add</button>
      <button onClick={() => add(dispatch)}>Error Add</button>
      <div className='display'>{count}</div>
      <button onClick={() => decrement(dispatch)}>Substract</button>
    </div>
  );
}

export default Counter;
