import React from 'react';
import {FaCalendarTimes} from 'react-icons/fa';

function DateStatus (props) {
  const {data, handlePopup} = props;
  const {user} = data;
  const handleClick = day => {
    handlePopup (day);
  };
  if (data.day === 'leave') {
    return (
      <td
        key={data.id}
        className="date-status"
        style={{width: '50px', backgroundColor: '#f2f2f2'}}
      >
        <FaCalendarTimes style={{color: 'grey'}} />
      </td>
    );
  }

  let st = user.status;
  let statusText = 'HI';
  let color = '#ffa500';
  if (st.length !== 0) {
    for (let i = 0; i < st.length; i++) {
      if (st[i].date === data.day) {
        if (st[i].status === 'Available') {
          statusText = 'A';
          color = '#58e817';
        } else if (
          st[i].status === 'Vacation' ||
          st[i].status === 'Unavailable'
        ) {
          statusText = 'UA';
          color = 'red';
        } else if (st[i].status === 'Booked') {
          statusText = 'B';
          color = '#507caf';
        }
      }
    }
  }
  return (
    <td
      key={data.id}
      onClick={() => handleClick (data)}
      className="date-status"
      style={{cursor: 'pointer', backgroundColor: color}}
    >
      {statusText}
    </td>
  );
}

export default DateStatus;
