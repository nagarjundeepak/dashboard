import React, {useState} from 'react';
import {connect} from 'react-redux';
import {modifyStatus} from '../../store/actions';

function PopupStatus({activities, date, handlePopup, onsubmit}) {
  const [value, setValue] = useState ('Available');
  const handleChange = e => {
    setValue (e.target.value);
  };
  const submitPopup = () => {
    handlePopup ();
    onsubmit (date, value);
  };
  return (
    <div className="popup">
      <div className="popup_inner">
        <div className="mt-3 mb-3">
          <h3>Choose Availablity on {date.day}</h3>
        </div>
        <div className="mt-3 mb-3">
          Please select option from below dropdown
        </div>
        <div className="col">
          <select onChange={handleChange} className="form-control">
            {activities.map (activity => {
              return (
                <option key={activity.status} value={activity.status}>
                  {activity.status}
                </option>
              );
            })}
          </select>
        </div>
        <button onClick={submitPopup} className="mt-3 btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    onsubmit: (date, value) => {
      dispatch (modifyStatus (date, value));
    },
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (PopupStatus);
