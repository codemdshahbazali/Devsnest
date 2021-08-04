const weatherDataReducer = (
  state = { weatherData: null, place: '', loading: false },
  action
) => {
  switch (action.type) {
    case 'GET_WEATHER_DATA':
      return action.payload;
    default:
      return state;
  }
};

export default weatherDataReducer;
