// File: src/components/Features/Clock/Clock.jsx
// Date: 9/18/2020
// Note: Observer Design Pattern and Participants
// ................................................................................
console.log("Mounting src/components/Features/Clock.jsx... <Clock/ />");

import React from 'react';
import './Clock.sass';

class Clock extends React.Component {
  render() {
    const currentTime = new Date(),
          hours = currentTime.getHours(),
          minutes = currentTime.getMinutes(),
          seconds = currentTime.getSeconds(),
          ampm = hours >= 12 ? 'pm' : 'am';

    return (
      <div className="clock">
        {
          hours == 0 ? 12 :
            (hours > 12) ?
              hours - 12 : hours
        }:{
          minutes > 9 ? minutes : `0${minutes}`
        }:{
          seconds > 9 ? seconds : `0${seconds}`
        } {ampm}
      </div>
    )
  }
}

export default Clock;

// eof
