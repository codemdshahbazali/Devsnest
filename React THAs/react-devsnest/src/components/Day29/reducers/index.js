import { combineReducers } from 'redux';
import placeReducer from './placeReducer';
import themeReducer from './themeReducer';
import weatherDataReducer from './weatherDataReducer';

const rootReducer = combineReducers({
  place: placeReducer,
  weatherData: weatherDataReducer,
  theme: themeReducer,
});

export default rootReducer;
