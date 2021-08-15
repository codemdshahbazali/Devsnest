interface ActionTypeAddNotes {
  type: 'ADD_NOTE';
  payload: string;
}

interface ActionTypeDeleteNotes {
  type: 'DELETE_NOTE';
  payload: string;
}

type ActionType = ActionTypeAddNotes | ActionTypeDeleteNotes;

export interface StateType {
  id: string;
  item: string;
}

const notesReducer = (
  state: any = [
    {
      id: 'shahbaz',
      item: 'Test',
    },
  ],
  action: ActionType
) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.payload];
    case 'DELETE_NOTE':
      return state.filter((note: StateType) => note.id !== action.payload);
    default:
      return state;
  }
};

export default notesReducer;
