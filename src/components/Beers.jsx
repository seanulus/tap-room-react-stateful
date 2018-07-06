import React from 'react';
import PropTypes from 'prop-types';

function Beers(props){
  return (
    <div className='beers-container'>
      <style jsx>{`
          .beers-container {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 99%;
            margin-right: 0;
            border: 1px solid black;
            border-radius: 5px;
            background: linear-gradient(#302e2e, #161616);
            color: white;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            text-transform: uppercase;
          }
          h3, p {
            font-weight: 300;
            letter-spacing, 5px;
          }
          .buttons-div {
            display: flex;
            flex-direction: column;
          }
          .button {
            padding: 10px;
            margin: 4px;
            border-radius: 4px;
          }
          img {
            width: 100px;
            border-radius: 100%;
          }
      `}</style>
      <div className='logo-image'>
        <img src={props.image}/>
      </div>
      <div className='info'>
        <h3>{props.brewer}</h3>
        <h3>{props.name}</h3>
        <h5>{props.description}</h5>
        <p>{props.abv}</p>
      </div>
      <div className='price'>
        <p>${props.price}</p>
        <p>Beers Left: {props.remaining}</p>
      </div>
      <div className='buttons-div'>
        <button className='button'>Edit</button>
        <button className='button'>Purchase</button>
      </div>
    </div>
  );
}

Beers.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string,
  image: PropTypes.string
};

export default Beers;
