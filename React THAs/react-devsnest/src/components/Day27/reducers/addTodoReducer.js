const initalState = [];

const addTodoReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'DELETE_TODO':
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    case 'COMPLETE_TODO':
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default addTodoReducer;
