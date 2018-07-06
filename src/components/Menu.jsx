import React from 'react';
import PropTypes from 'prop-types';

function Menu(props) {
  return(
    <div className='menu-items'>
      <style jsx>{`
          .menu-items {
            display flex;
          }
          img {
            width: 20vw;
            height: 20vw;
          }
          .description {
            padding-left: 10px;
          }
          h3, p {
            font-weight: 300;
            letter-spacing, 5px;
          }
          @media screen and (max-width: 720px) {
            img {
              width: 30vw;
              height 30vw;
            }
          }
      `}</style>
      <div className='food-image'>
        <img src={props.image}/>
      </div>
      <div className='description'>
        <h3>{props.item}</h3>
        <p>{props.description}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

Menu.propTypes = {
  item: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string
};

export default Menu;
