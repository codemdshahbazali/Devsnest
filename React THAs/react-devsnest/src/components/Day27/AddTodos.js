import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from './actions';

function AddTodos() {
  const [todoValue, setTodoValue] = useState('');
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type='text'
        name='todo-input'
        id='todo-input'
        placeholder='Enter Todo'
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button
        type='submit'
        className='todo-button'
        onClick={() => {
          dispatch(
            addTodo({
              id: uuidv4(),
              title: todoValue,
              completed: false,
            })
          );
          setTodoValue('');
        }}>
        Add Todo
      </button>
    </div>
  );
}

export default AddTodos;
