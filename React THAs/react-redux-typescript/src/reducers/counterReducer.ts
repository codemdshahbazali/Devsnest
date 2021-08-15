interface ActionType {
  type: string;
  payload: number;
}

const counterReducer = (state: number = 0, action: ActionType) => {
  switch (action.type) {
    case 'INC_COUNTER':
      return state + action.payload;
    case 'DEC_COUNTER':
      return state - action.payload;
    default:
      return state;
  }
};

export default counterReducer;
