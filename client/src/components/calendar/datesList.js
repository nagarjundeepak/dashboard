import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';

function DatesList({dates}) {
  let datesArray = [];
  for (let i = dates.startDate; i <= dates.endDate; i++) {
    //   weekend checker
    let check = moment ().add (i, 'days').format ('ddd').toString ();
    // format the date
    let day = moment ()
      .add (i, 'days')
      .format ('ddd D MMM')
      .toString ()
      .substr (0, 10);
    //   conditional check
    let colorCode = check === 'Sat' || check === 'Sun' ? 'grey' : 'black';
    datesArray.push (
      <td key={i} className="date" style={{color: colorCode}}>
        {day}
      </td>
    );
  }
  return <tr>{datesArray}</tr>;
}

const mapStateToProps = state => {
  return state;
};

export default connect (mapStateToProps) (DatesList);
