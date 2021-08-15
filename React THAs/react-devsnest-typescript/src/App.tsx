import React from 'react';
import TodoList from './components/Day33/TodoList';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Common/Header';
import Welcome from './components/Common/Welcome';
import Counter from './components/Day34/Counter';
import Note from './components/Day34/Note';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider>
          <Switch>
            <Route exact path='/'>
              <Header />
              <Welcome />
            </Route>
            <Route path='/Day33'>
              <Header />
              <TodoList />
            </Route>
            <Route path='/Day34'>
              <Header />
              <Counter />
              <Note />
            </Route>
            <Route path='/Day35'>
              <Header />
              <h1>Day 35 goes here</h1>
            </Route>
          </Switch>
        </ThemeProvider>
      </Provider>
    </div>
  );
};

export default App;
