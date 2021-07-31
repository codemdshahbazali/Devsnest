import React, { useState } from 'react';

function HealthTodo(props) {
  const { todo, updateTodo, deleteItem } = props;
  console.log(todo);

  const [edit, setedit] = useState(false);
  const [updatedItem, setupdatedItem] = useState(todo.item);
  const [updatedCalorie, setupdatedCalorie] = useState(todo.calorie);

  return (
    <div className='health-item'>
      {!edit ? (
        <>
          <span>{updatedItem}</span>
          <p>{`You have consumed ${updatedCalorie} calories`}</p>
        </>
      ) : (
        <>
          <input
            type='text'
            name='edit-text'
            id='edit-text'
            value={updatedItem}
            onChange={(e) => {
              setupdatedItem(e.target.value);
            }}
          />
          <input
            type='number'
            name='edit-number'
            id='edit-number'
            value={updatedCalorie}
            onChange={(e) => {
              setupdatedCalorie(e.target.value);
            }}
          />
        </>
      )}
      <button
        className='btn-primary'
        onClick={() => {
          if (!edit) {
            setedit(true);
          } else {
            setedit(false);
            let updatedTodo = {
              id: todo.id,
              item: updatedItem,
              calorie: updatedCalorie,
            };
            updateTodo(updatedTodo);
          }
        }}>
        {!edit ? 'Edit' : 'Save'}
      </button>
      <button
        className='btn-danger'
        type='submit'
        onClick={() => {
          deleteItem(todo.id);
        }}>
        Delete
      </button>
    </div>
  );
}

export default HealthTodo;
