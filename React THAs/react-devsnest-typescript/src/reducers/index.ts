import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import notesReducer from './notesReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  note: notesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
