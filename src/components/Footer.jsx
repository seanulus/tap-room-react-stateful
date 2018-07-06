import React from 'react';
import HoursList from './HoursList';
import LinkList from './LinkList';

function Footer() {
  return(
    <div>
      <style jsx>{`
          div {
            background-color: black;
          }

      `}</style>
      <HoursList/>
      <LinkList/>
    </div>
  );
}

export default Footer;
