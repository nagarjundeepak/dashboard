import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addingNotes} from '../../store/actions/';

function Notes({id, notesData, onNewNotes}) {
  const [bool, setBool] = useState (false);
  const [value, setValue] = useState (null);
  const handleClick = () => {
    setBool (!bool);
  };
  const handleSubmit = e => {
    e.preventDefault ();
    onNewNotes (id, value);
    setBool (!bool);
  };
  const inputNotes = (
    <form onSubmit={handleSubmit}>
      <input
        onChange={e => setValue (e.target.value)}
        type="text"
        placeholder="type & press enter"
      />
    </form>
  );
  const addNote = (
    <button className="button" onClick={handleClick}>Add Note</button>
  );
  const editNote = (
    <div>
      <div style={{textOverflow: 'ellipsis'}}>{notesData}</div>
      <button className="button" onClick={handleClick}>Edit Note</button>
    </div>
  );

  return (
    <div className="col text-center">
      {bool
        ? inputNotes
        : notesData === '' || notesData === null ? addNote : editNote}
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onNewNotes: (id, value) => {
      dispatch (addingNotes (id, value));
    },
  };
};

let NotesHOC = connect (null, mapDispatchToProps) (Notes);

export default NotesHOC;
