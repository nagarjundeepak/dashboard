import React from 'react';

function Ae({aeData}) {
  const handleChange = e => {
    console.log ('checked');
  };
  return (
    <div className="col text-center">
      <input
        type="checkbox"
        checked={aeData}
        onChange={handleChange}
        className="ae-checkbox"
      />
    </div>
  );
}

export default Ae;
