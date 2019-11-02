import React from 'react';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';

function ChangeFortnight({prevClick, nextClick}) {
  return (
    <div className="row mt-3">
      <div className="col previous-fn" onClick={() => prevClick ()}>
        <FaArrowLeft className="mr-2" />
        <span>Previous Fortnight</span>
      </div>
      <div className="col next-fn" onClick={() => nextClick ()}>
        <span>Next Fortnight</span>
        <FaArrowRight className="ml-2" />
      </div>
    </div>
  );
}

export default ChangeFortnight;
