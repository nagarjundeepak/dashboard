import React, {useState} from 'react';
import {connect} from 'react-redux';
import {searchUser} from '../../../store/actions';

function Search({onSearch}) {
  const [searchTerm, setSearchTerm] = useState (null);
  const handleSubmit = e => {
    e.preventDefault ();
    onSearch (searchTerm);
  };
  return (
    <div className="col">
      <form onSubmit={handleSubmit}>
        <input
          onChange={e => setSearchTerm (e.target.value)}
          type="search"
          placeholder="enter name & press enter"
          className="form-control"
        />
      </form>

    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onSearch: text => {
      dispatch (searchUser (text));
    },
  };
};

let SearchHOC = connect (null, mapDispatchToProps) (Search);

export {SearchHOC};
