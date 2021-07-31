import React, { useState } from 'react';
import HealthTodo from './HealthTodo';
import { v4 as uuidv4 } from 'uuid';
import './HealthTodoList.css';

function HealthTodoList() {
  const [todos, settodos] = useState([]);
  const [item, setitem] = useState('');
  const [calorie, setcalorie] = useState('');

  const updateTodo = (newTodo) => {
    settodos(current => current.map((todo) =>
        todo.id === newTodo.id
          ? { ...todo, item: newTodo.item, calorie: newTodo.calorie }
          : todo
      ))
  };

  const deleteItem = (todoId) => {
    let filteredData = todos.filter((elementObj) => {
      return elementObj.id !== todoId;
    });

    settodos(filteredData);
  };

  return (
    <div className='health-todos-container'>
      <div className='health-todos-header'>
        <div className='user-input'>
          <input
            type='text'
            value={item}
            id='item-name'
            placeholder='Item name'
            onChange={(e) => {
              setitem(e.target.value);
            }}
          />
          <input
            type='number'
            value={calorie}
            id='cal-amount'
            placeholder='Calorie Amount'
            onChange={(e) => {
              setcalorie(e.target.value);
            }}
          />
        </div>
        <button
          className='btn-primary'
          onClick={(e) => {
            // console.log(item, calorie);
            let todo = {
              id: uuidv4(),
              item, 
              calorie,
            };
            // console.log(todo);
            settodos([todo, ...todos]);
            setitem('');
            setcalorie(0);
            //console.log(todos);
          }}>
          Add Item
        </button>
      </div>

      <div className='item-list-container'>
        <h1>Start Adding Items</h1>
        <div className='item-list'>
          {todos.map((todo, index) => {
            // console.log(todos);
            return (
              <HealthTodo
                todo={todo}
                key={todo.id}
                updateTodo={updateTodo}
                deleteItem={deleteItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HealthTodoList;
