import React from 'react';
import Hours from './Hours';

const masterHoursList = [
  {
    day: 'Sunday',
    hours: '4:00pm - 10:00pm'
  },
  {
    day: 'Monday',
    hours: '4:00pm - 10:00pm'
  },
  {
    day: 'Tuesday',
    hours: '4:00pm - 10:00pm'
  },
  {
    day: 'Wednesday',
    hours: '4:00pm - 10:00pm'
  },
  {
    day: 'Thursday',
    hours: '4:00pm - 10:00pm'
  },
  {
    day: 'Friday',
    hours: '4:00pm - 12:00am'
  },
  {
    day: 'Saturday',
    hours: '4:00pm - 12:00am'
  }
];

function HoursList(){

  const days = {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridColumnGap: '10px',
    padding: '10px',
    height: '100px'
  };

  return(
    <div style={days}>
      <style jsx>{`
          div {
            color: white;
          }
      `}</style>
      {masterHoursList.map((hours, index) =>
        <Hours day = {hours.day}
          hours = {hours.hours}
          key={index}/>
      )}
    </div>
  );
}

export default HoursList;
