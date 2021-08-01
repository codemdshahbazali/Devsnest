import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, completeTodo } from './actions';

function ListTodos() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div className='redux-todoslist-container'>
      {todos.map((todo, index) => {
        return (
          <div className='redux-todo' key={index}>
            <div className='todo-content'>
              <input
                type='checkbox'
                name='completed-checkbox'
                id='completed-checkbox'
                onClick={() => {
                  dispatch(completeTodo(todo.id));
                }}
              />
              <span className={todo.completed ? 'redux-todo-title' : undefined}>
                {todo.title}
              </span>
            </div>
            <button
              onClick={() => {
                dispatch(deleteTodo(todo.id));
              }}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ListTodos;
