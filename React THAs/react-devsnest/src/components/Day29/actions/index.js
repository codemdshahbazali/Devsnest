const place = (place) => {
  return {
    type: 'PLACE',
    payload: place,
  };
};

const weatherData = (place) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_WEATHER_DATA',
      payload: { weatherData: {}, place, loading: true },
    });
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=8540aec6629649ccb01141843210208&q=${place}&aqi=no`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: 'GET_WEATHER_DATA',
          payload: { weatherData: data.current, place, loading: false },
        });
      });
  };
  //
};

const changeTheme = () => {
  return {
    type: 'CHANGE_THEME',
  };
};

export { place, weatherData, changeTheme };
