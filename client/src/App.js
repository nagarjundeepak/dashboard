import React, {useState} from 'react';
import {
  LegendListHOC,
  ChangeFortnightHOC,
  UserDetailsHOC,
  StatusListHOC,
} from './containers';
import Calendar from './components/calendar/calendar';
import PopupStatus from './components/statuslist/popupStatus';

function App () {
  const [popup, setPopup] = useState (false);
  const [date, setDate] = useState (null);
  const handlePopup = day => {
    setDate (day);
    setPopup (!popup);
  };
  return (
    <div className="app">
      <LegendListHOC />
      <ChangeFortnightHOC />
      <div className="row mt-3">
        <div className="col">
          <UserDetailsHOC />
        </div>
        <div className="col">
          <Calendar />
          <StatusListHOC handlePopup={handlePopup} />
        </div>
      </div>
      {popup ? <PopupStatus date={date} handlePopup={handlePopup} /> : null}
    </div>
  );
}

export default App;
