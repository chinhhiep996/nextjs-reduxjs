import React from 'react';
import { Input } from 'antd';

import './Display.css';

const Display = (props) => {
  const msToTime = (timeInMilliseconds) => {
    let time = timeInMilliseconds;

    const hours = formatTime(Math.floor(time / (60 * 60 * 1000)));

    time = time % (60 * 60 * 1000);
    const minutes = formatTime(Math.floor(time / (60 * 1000)));

    time = time % (60 * 1000);
    const seconds = formatTime(Math.floor(time / 1000));

    const miliSeconds = formatTime(time % 1000);

    return `${hours} : ${minutes} : ${seconds} : ${miliSeconds}`;
  }

  const formatTime = (unitTime) => {
    return unitTime < 10 ? `0${unitTime}`.substring(0, 2) : unitTime.toString().substring(0, 2);
  }


  return (
    <div>
      {
        props.timer ? (
          <div className="display-full">
            <div>
              <div className="display-full-countdown">
                <label type="text" className="display-full-countdown-label">H</label>
                <label type="text" className="display-full-countdown-label">M</label>
                <label type="text" className="display-full-countdown-label">S</label>
                <label type="text" className="display-full-countdown-label">MS</label>
              </div>
              <div className="display-full-countdown-time">
                {msToTime(props.timer)}
              </div>
            </div>
          </div>
        ) : (
            <div className="clock2-display">
              <div>
                <div className="display-label-form">
                  <label type="text" className="display-label">H</label>
                  <label type="text" className="display-label">M</label>
                  <label type="text" className="display-label">S</label>
                </div>

                <div className="display-input-group">
                  <Input
                    className="display-time-1 display-hours"
                    placeholder="00"
                    size="large"
                    onFocus={() => props.onFocusChange('HH')}
                    value={props.hours}
                  />

                  <span className="display-separator">:</span>

                  <Input
                    className="display-time-1 display-hours"
                    placeholder="00"
                    size="large"
                    onFocus={() => props.onFocusChange('MM')}
                    value={props.minutes}
                  />

                  <span className="display-separator">:</span>

                  <Input
                    className="display-time-1 display-hours"
                    placeholder="00"
                    size="large"
                    onFocus={() => props.onFocusChange('SS')}
                    value={props.seconds}
                  />
                </div>
              </div>
            </div>
          )
      }
    </div>
  );
}

export default Display;