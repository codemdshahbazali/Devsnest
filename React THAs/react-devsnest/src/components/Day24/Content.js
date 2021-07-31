import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Dashboard from './Dashboard';
import Home from './Home';
import Profile from './Profile';

function Content() {
  const [login, setlogin] = useState(false);
  return (
    <div className='content-container'>
      <Switch>
        <Route exact path='/Day24/home'>
          <Home login={login} setlogin={setlogin} />
        </Route>
        <Route path='/Day24/about'>
          <About />
        </Route>
        <Route path='/Day24/profile'>
          {!login ? (
            <Profile login={login} setlogin={setlogin} />
          ) : (
            <Home login={login} setlogin={setlogin} />
          )}
        </Route>
        <Route path='/Day24/dashboard'>
          {!login ? (
            <Dashboard login={login} setlogin={setlogin} />
          ) : (
            <Home login={login} setlogin={setlogin} />
          )}
        </Route>
      </Switch>
    </div>
  );
}

export default Content;
