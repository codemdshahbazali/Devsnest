import { combineReducers } from 'redux';
import addTodoReducer from './addTodoReducer';

const rootReducer = combineReducers({
  todo: addTodoReducer,
});

export default rootReducer;
