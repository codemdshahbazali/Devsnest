import rootReducer from './reducers';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
