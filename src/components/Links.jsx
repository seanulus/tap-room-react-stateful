import React from 'react';
import PropTypes from 'prop-types';

function Links(props) {
  return(
    <div>
      <style jsx>{`
          div {
            color: white;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          li {
            text-align: center;
          }
          h3 {
            text-align: center;
            font-weight: 300;
            margin: 5px 0;
          }
      `}</style>
      <div>
        <h3>{props.title}</h3>
        <ul>
          {props.links.map((link, index) =>
            <li key={index}>{link}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

Links.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array
};

export default Links;
