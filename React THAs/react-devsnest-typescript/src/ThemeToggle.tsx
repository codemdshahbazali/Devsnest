import React from 'react';
import { useContext } from 'react';
import ThemeContext, { ThemeContextType } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
  return (
    <div>
      <button
        onClick={() => {
          setTheme(!theme);
        }}>
        {theme ? 'Dark' : 'Light'}
      </button>
    </div>
  );
};

export default ThemeToggle;
