import React from 'react';
import { Link } from 'react-router-dom';
import Wood from '../assets/img/wood.jpg';



function Header(){

  const link = {
    textDecoration: 'none',
    color: 'white',
    marginBottom: '10px'
  };
  return (
    <div>
      <style jsx>{`
          div {
            background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.4) 100%), url(${Wood});
            color: white;
            opacity: 0.92;
          }
          h1 {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: 400;
            text-align: center;
            text-decoration: underline;
            text-underline-position: under;
            margin: 0px;
            padding-top: 10px;
          }
          h2 {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: 300;
            text-align: center;
            margin-top: 5px;
          }
          .nav {
            display: flex;
            justify-content: space-evenly;
            font-size: 20px;
          }
      `}</style>
      <h1>Cure What Ales You</h1>
      <h2>Tap-Room and BBQ</h2>
      <div className='nav'>
        <Link style={link} to='/'>Home</Link> <Link style={link} to='/beers'>Beer List</Link> <Link style={link} to='/menu'>Menu</Link>
      </div>
    </div>
  );
}

export default Header;
