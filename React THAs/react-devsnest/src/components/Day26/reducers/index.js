import { combineReducers } from 'redux';
import userDetailsReducer from './userDetailsRedcuer';

const rootReducer = combineReducers({
  updateUser: userDetailsReducer,
});

export default rootReducer;
