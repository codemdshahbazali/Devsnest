const initialCounter = 0;

const counterReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case 'INC_NUMBER':
      console.log('Pressed +');
      return state + 1;

    case 'DEC_NUMBER':
      console.log('Pressed -');
      return state - 1;

    default:
      console.log('Default');
      return state;
  }
};

export default counterReducer;
