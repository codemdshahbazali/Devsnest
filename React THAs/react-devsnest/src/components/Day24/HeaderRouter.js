import React from 'react';
import { Link } from 'react-router-dom';

function HeaderRouter() {
  return (
    <div>
      <ul className='router-header-list'>
        <li>
          <Link to='/Day24/home'>Home</Link>
        </li>
        <li>
          <Link to='/Day24/about'>About</Link>
        </li>
        <li>
          <Link to='/Day24/profile'>Profile</Link>
        </li>
        <li>
          <Link to='/Day24/dashboard'>Dashboard</Link>
        </li>
      </ul>
      {/* <Switch>
        <Route exact path='/Day24/home'>
          <Home />
        </Route>
        <Route exact path='/Day24/about'>
          <About />
        </Route>
        <Route exact path='/Day24/profile'>
          <Profile />
        </Route>
        <Route exact path='/Day24/dashboard'>
          <Dashboard />
        </Route>
      </Switch> */}
    </div>
  );
}

export default HeaderRouter;
