const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: todo,
  };
};

const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    payload: id,
  };
};

const completeTodo = (id) => {
  return {
    type: 'COMPLETE_TODO',
    payload: id,
  };
};

export { addTodo, deleteTodo, completeTodo };
