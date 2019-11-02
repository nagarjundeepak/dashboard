import React from 'react';
import moment from 'moment';

import DateStatus from './dateStatus';

function StatusList (state) {
  const {users, dates, handlePopup, filter} = state;
  let {userData, filtered} = users;
  let listOfDates = [];
  userData = filter ? filtered : userData;
  for (let i = dates.startDate; i <= dates.endDate; i++) {
    let check = moment ().add (i, 'days').format ('ddd').toString ();
    let day = moment ().add (i, 'days').format ('ddd D MMM').toString ();
    if (check === 'Sat' || check === 'Sun') {
      listOfDates.push ('leave');
    } else {
      listOfDates.push (day);
    }
  }

  let listOfRows = [];
  for (let j = 0; j < userData.length; j++) {
    listOfRows.push (
      <tr key={userData[j].id} className="mb-2">
        {listOfDates.map (day => {
          return (
            <DateStatus
              key={Math.random ()}
              handlePopup={handlePopup}
              data={{day: day, id: userData[j].id, user: userData[j]}}
            />
          );
        })}
      </tr>
    );
  }

  return (
    <div>
      <table className="table table-bordered status-list">
        <tbody>{listOfRows}</tbody>
      </table>
    </div>
  );
}

export default StatusList;
