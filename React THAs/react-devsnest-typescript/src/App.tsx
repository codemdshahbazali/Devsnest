import React from 'react';
import TodoList from './components/Day33/TodoList';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <TodoList />
      </ThemeProvider>
    </div>
  );
};

export default App;
