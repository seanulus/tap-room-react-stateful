import React from 'react';
import PropTypes from 'prop-types';

function Hours(props){
  return (
    <div>
      <style jsx>{`
          div {
            padding-left: 15px;
          }
          h3 {
            text-align: center;
            font-weight: 300;
          }
      `}</style>
      <h3>{props.day}</h3>
      <p>{props.hours}</p>
    </div>
  );
}

Hours.propTypes = {
  day: PropTypes.string,
  hours: PropTypes.string
};

export default Hours;
