import React from 'react';

import './Display.css';

const Display = (props) => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  }

  const FormatDay = (date) => {
    const year = date.getFullYear();

    const month = months[date.getMonth()];

    const dayOfWeek = days[date.getDay()];

    const day = formatTime(date.getDate());

    return `${dayOfWeek} ${day} ${month} ${year}`;
  }

  const FormatTime = (date) => {
    const hours = formatTime(date.getHours());

    const minutes = formatTime(date.getMinutes());

    const seconds = formatTime(date.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div className="display-clock">
      <div className="display-time">
        {FormatTime(props.date)}
      </div>
      <div className="display-day">
        {
          props.dateVisible && FormatDay(props.date)
        }
      </div>
    </div>
  );
}

export default Display;
