import React from 'react';

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

    return `${hours}:${minutes}:${seconds}:${miliSeconds}`;
  }

  const formatTime = (unitTime) => {
    return unitTime < 10 ? `0${unitTime}`.substring(0, 2) : unitTime.toString().substring(0, 2);
  }

  return (
    <div className="timer-display">
      <div className="timer-display-day">
        {msToTime(props.timer)}
      </div>
      <div className="timer-display-time">
        {Math.floor(props.timer / 1000)}
      </div>
    </div>
  );
}

export default Display;