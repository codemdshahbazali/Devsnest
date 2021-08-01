import React from 'react';
import { useDispatch } from 'react-redux';
import { updateUsername, updateUserEmail, updateUserPassword } from './actions';

function UserInput() {
  const dispatch = useDispatch();
  return (
    <div className='redux-user-input-container'>
      <h1>User Details</h1>
      <div className='redux-user-input-feilds'>
        <input
          type='text'
          name='username'
          id='username'
          placeholder='Username'
          onChange={(e) => {
            console.log(e.target.value);
            dispatch(updateUsername(e.target.value));
          }}
        />
        <input
          type='text'
          name='email'
          id='email'
          placeholder='Email'
          onChange={(e) => {
            console.log(e.target.value);
            dispatch(updateUserEmail(e.target.value));
          }}
        />
        <input
          type='text'
          name='password'
          id='password'
          placeholder='Password'
          onChange={(e) => {
            console.log(e.target.value);
            dispatch(updateUserPassword(e.target.value));
          }}
        />
      </div>
    </div>
  );
}

export default UserInput;
