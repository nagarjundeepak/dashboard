import React from 'react';
import {FaStar} from 'react-icons/fa';

function Ratings({ratingCount}) {
  if (!ratingCount) {
    return <span />;
  }
  const stars = [];
  for (let i = 0; i < ratingCount; i++) {
    stars.push (
      <FaStar key={i} className="star">
        &#9733;
      </FaStar>
    );
  }
  return <div className="col" style={{paddingLeft: '0px'}}>{stars}</div>;
}

export default Ratings;
