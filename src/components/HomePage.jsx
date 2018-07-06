import React from 'react';
import tapHouse from '../assets/img/tap-house.jpg';

function HomePage() {
  return (
    <div>
      <style jsx>{`
          div {
            color: white;
          }
          .tap-image {
            width: 100%;
            height: 863px;
            background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.4) 100%), url(${tapHouse});
            background-repeat: no-repeat;
          }
          .welcome {
            padding-top: 300px;
            display: flex;
            flex-direction: column;
            text-align: center;
          }
          h2, p {
            margin: 0;
            padding: 20px;
            font-weight: 300;
            opacity: 0.92;
            line-height: 1.6;
            letter-spacing: 2px;
            text-shadow: 2px 2px black;
          }

    `}</style>
      <div className='tap-image'>
        <div className='welcome'>
          <h2>Enjoy A Refreshing Beer In Our Brand New Tap-House</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
