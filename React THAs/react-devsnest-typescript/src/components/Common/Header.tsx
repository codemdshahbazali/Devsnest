import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className='header-container'>
      <ul className='list'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Day33'>Day 33 - 1</Link>
        </li>
        <li>
          <Link to='/Day34'>Day 34 - 1</Link>
        </li>
        <li>
          <Link to='/Day35'>Day 35 - 1</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
