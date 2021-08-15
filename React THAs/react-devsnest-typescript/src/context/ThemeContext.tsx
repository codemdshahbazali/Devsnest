import React from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';

type ActionType =
  | {
      type: 'GET_THEME';
    }
  | {
      type: 'TOGGLE_THEME';
    };

const initialState = false;

const ThemeContext = createContext<{
  state: boolean;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => null,
});

const themeReducer = (state: boolean = initialState, action: ActionType) => {
  switch (action.type) {
    case 'GET_THEME':
      return state;
    case 'TOGGLE_THEME':
      return !state;
  }
};

export const ThemeProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
