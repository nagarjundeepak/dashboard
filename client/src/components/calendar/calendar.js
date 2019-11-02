import React from 'react';
import DatesList from './datesList';

function Calendar () {
  return (
    <table className="table table-bordered date-list">
      <tbody>
        <DatesList />
      </tbody>
    </table>
  );
}

export default Calendar;
