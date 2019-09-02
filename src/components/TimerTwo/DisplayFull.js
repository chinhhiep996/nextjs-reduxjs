import React from 'react';

import './DisplayFull.css';

const DisplayFull = () => {
  return (
    <div className="display-full">
      <div>
        <div className="display-full-countdown">
          <label type="text" className="display-full-countdown-label">H</label>
          <label type="text" className="display-full-countdown-label">M</label>
          <label type="text" className="display-full-countdown-label">S</label>
          <label type="text" className="display-full-countdown-label">MS</label>
        </div>
        <div className="display-full-countdown-time">
          19 : 56 : 32 : 95
        </div>
      </div>
    </div>
  );
}

export default DisplayFull;