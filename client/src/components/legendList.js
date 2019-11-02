import React from 'react';

function LegendList({activities}) {
  if (!activities) {
    return <div>loading...</div>;
  }
  return (
    <div className="row legend-list">
      {activities.map ((activity, i) => {
        const color = activity.colorCode;
        return (
          <div key={i} className="row ml-5">
            <div className="color-box mt-1" style={{backgroundColor: color}} />
            <div className="col">{activity.status}</div>
          </div>
        );
      })}
    </div>
  );
}

export default LegendList;
