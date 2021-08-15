import React, { FC, ReactElement, useEffect, useState } from 'react';
import './App.css';
import ThemeContext from './ThemeContext';
import ThemeToggle from './ThemeToggle';

// interface AppProps {
//   title: string;
//   desc?: string;
// }

// Method 1
// const App: FC<AppProps> = ({ title }): ReactElement => {
//   return <div className='App'>{title ? title : 'Hello World'}</div>;
// };

//Method 2
// const App = ({ title, desc }: AppProps) => {
//   return (
//     <div className='App'>
//       {title ? title : 'Hello World'} <br />
//       {desc ? desc : 'Welcome'}
//     </div>
//   );
// };

const App = () => {
  const [counter, setCounter] = useState<number | null>(0);

  // useEffect(() => {
  //   setCounter(0);
  // }, []);

  const [theme, setTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className='App'>
        {counter !== null ? (
          <>
            <button
              onClick={() => {
                // setCounter((prevState) => prevState - 1);
                setCounter(counter - 1);
              }}>
              -
            </button>
            <span>{counter}</span>
            <button
              onClick={() => {
                // setCounter((prevState) => prevState + 1);
                setCounter(counter + 1);
              }}>
              +
            </button>
          </>
        ) : (
          ''
        )}

        <ThemeToggle />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
