import { Switch } from './../Switch';
import {
  useToggle,
  toggleReducer,
  actionTypes,
} from '../../customhooks/useToggle';
import { useState } from 'react';

const Toggle = () => {
  const [numberOfClick, setNumberOfClicks] = useState(0);
  const tooManyClicks = numberOfClick >= 4;

  const increment = () => setNumberOfClicks((count) => count + 1);

  const { on, toggle, setOn, setOff } = useToggle({
    reducer(currentState, action) {
      const changes = toggleReducer(currentState, action);
      if (tooManyClicks && action.type === actionTypes.toggle) {
        //other changes are fine, but on needs to be unchanged
        return { ...changes, on: currentState.on };
      } else {
        //all changes are fine
        return changes;
      }
    },
  });

  // const { on, toggle, setOn, setOff } = useToggle();

  return (
    <div>
      <button onClick={setOff}>Switch Off</button>
      <button onClick={setOn}>Switch On</button>
      <Switch
        on={on}
        onClick={() => {
          toggle();
          increment();
        }}
      />
      {/* <div>Number of clicks {numberOfClick}</div> */}
      {/* <button onClick={reset}>Reset</button> */}
      {tooManyClicks ? (
        <button onClick={() => setNumberOfClicks(0)}>Reset</button>
      ) : null}
    </div>
  );
};

export default Toggle;
