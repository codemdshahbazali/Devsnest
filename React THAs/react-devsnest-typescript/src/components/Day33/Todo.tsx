import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import { TodoType } from './TodoList';

interface TodoProps {
  todo: TodoType;
  todos: TodoType[];
  setTodos: (todo: TodoType[]) => void;
}

const Todo = (props: TodoProps) => {
  const { state } = useContext(ThemeContext);
  return (
    <div className={state ? 'todo-container dark' : 'todo-container'}>
      <div>
        <input
          type='checkbox'
          name='markTrue'
          id='markTrue'
          onClick={() => {
            props.setTodos(
              props.todos.map((element) => {
                if (element.id === props.todo.id) {
                  return { ...props.todo, done: !props.todo.done };
                } else {
                  return element;
                }
              })
            );
            console.log(props.todos);
          }}
        />
        <span className={props.todo.done ? 'todo-text-marked' : undefined}>
          {props.todo.item}
        </span>
      </div>
      <div className='todo-btn-delete'>
        <button
          type='submit'
          onClick={() => {
            props.setTodos(
              props.todos.filter((element) => element.id !== props.todo.id)
            );
          }}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
