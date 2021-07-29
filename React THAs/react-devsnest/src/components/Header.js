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
          <Link to='/Day16-Cards'>Day 16 - 1</Link>
        </li>
        <li>
          <Link to='/Day16-Chessboard'>Day 16 - 2</Link>
        </li>
        <li>
          <Link to='/Day17'>Day 17 - 1</Link>
        </li>
        <li>
          <Link to='/Day18-Chessboard'>Day 18 - 1</Link>
        </li>
        <li>
          <Link to='/Day18-HealthCard'>Day 18 - 2</Link>
        </li>
        <li>
          <Link to='/Day19'>Day 19 - 1</Link>
        </li>
        <li>
          <Link to='/Day20'>Day 20 - 1</Link>
        </li>
        <li>
          <Link to='/Day21'>Day 21 - 1</Link>
        </li>
        <li>
          <Link to='/Day22'>Day 22 - 1</Link>
        </li>
        <li>
          <Link to='/Day23'>Day 23 - 1</Link>
        </li>
        <li>
          <Link to='/Day24'>Day 24 - 1</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
