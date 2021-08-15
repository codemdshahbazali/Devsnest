import { StateType } from '../reducers/notesReducer';

const IncCounter = (num: number) => {
  return {
    type: 'INC_COUNTER',
    payload: num,
  };
};

const DecCounter = (num: number) => {
  return {
    type: 'DEC_COUNTER',
    payload: num,
  };
};

const AddNote = (noteObj: StateType) => {
  return {
    type: 'ADD_NOTE',
    payload: noteObj,
  };
};

const DeleteNote = (id: string) => {
  return {
    type: 'DELETE_NOTE',
    payload: id,
  };
};

export { IncCounter, DecCounter, AddNote, DeleteNote };
