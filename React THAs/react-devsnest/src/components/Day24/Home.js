import React from 'react';

function Home(props) {
  const { login, setlogin } = props;
  return (
    <div className='header-container'>
      <h1>Home</h1>
      <h2>If not logged in you cant access Profile & Dashboard</h2>
      <button onClick={() => setlogin((state) => !state)}>
        {login ? 'Login' : 'Logout'}
      </button>
    </div>
  );
}

export default Home;
