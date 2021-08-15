import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddNote, DeleteNote } from './../../actions';
import { RootState } from './../../reducers';
import { StateType } from './../../reducers/notesReducer';
import { v4 as uuidv4 } from 'uuid';
import './noteCounterStyle.css';

const Note = () => {
  const [noteText, setNoteText] = useState<string>('');
  const note = useSelector((state: RootState) => state.note);
  console.log(note);
  const dispatch = useDispatch();
  return (
    <div className='notes-container'>
      <div className='note-input'>
        <input
          type='text'
          name='note-inputbox'
          id='note-inputbox'
          value={noteText}
          onChange={(e) => {
            setNoteText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(
              AddNote({
                id: uuidv4(),
                item: noteText,
              })
            );
            setNoteText('');
          }}>
          Submit
        </button>
      </div>
      <div className='note-list'>
        {note?.map((noteElement: StateType, index: number) => (
          <div className='note-container' key={index}>
            <span>{noteElement.item}</span>
            <button
              onClick={() => {
                dispatch(DeleteNote(noteElement.id));
              }}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Note;
