import React, { useState } from 'react';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

export interface TodoType {
  id: string;
  item: string;
  done: boolean;
}

const TodoList = () => {
  const { state, dispatch } = useContext(ThemeContext);
  const [todos, setTodos] = useState<TodoType[]>([
    {
      id: uuidv4().toString(),
      item: 'Sample', // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
      done: false,
    },
    {
      id: uuidv4().toString(),
      item: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro commodi pariatur a, reprehenderit hic labore, ullam quas est error quia consequuntur. Impedit tenetur nihil doloremque sint amet voluptas cum?', // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
      done: false,
    },
  ]);
  const [todo, setTodo] = useState<string>('');

  return (
    <div className={state ? 'todos-container dark' : 'todos-container'}>
      <div className='todos-enter'>
        <input
          type='text'
          name='todoItem'
          id='todoItem'
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          type='submit'
          onClick={() => {
            const newTodo = {
              id: uuidv4().toString(),
              item: todo, // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
              done: false,
            };
            setTodos([...todos, newTodo]);
            setTodo('');
          }}>
          Add Todo
        </button>
        <button
          type='submit'
          onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
          Toggle Theme
        </button>
      </div>
      {todos
        .map((todo, index) => (
          <Todo todo={todo} todos={todos} setTodos={setTodos} key={index} />
        ))
        .reverse()}
    </div>
  );
};

export default TodoList;
