const placeReducer = (state = '', action) => {
  switch (action.type) {
    case 'PLACE':
      return action.payload;
    default:
      return state;
  }
};

export default placeReducer;
