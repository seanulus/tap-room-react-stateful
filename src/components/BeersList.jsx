import React from 'react';
import Beers from './Beers';
import PropTypes from 'prop-types';





function BeersList(props){
  return(
    <div>
      <style jsx>{`
          div {
            display: grid;
            grid-template-rows: repeat(3, 1fr);
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 10px;
            margin-top: 20px;
            margin-left: 2px;
            border-radius: 5px;
            width: 100%;
          }
          @media screen and (max-width: 950px) {
            div {
              display: block;
            }
          }
      `}</style>

    {props.kegList.map((beer) =>
        <Beers brewer = {beer.brewer}
          name = {beer.name}
          description = {beer.description}
          abv = {beer.abv}
          price = {beer.price}
          remaining = {props.remaining}
          image = {beer.image}
          onBeersRemaining = {props.onBeersRemaining}
          clickedKeg = {props.clickedKeg}
          id={beer.id}
          key={beer.id}/>
      )}
    </div>
  );
}

BeersList.propTypes = {
  onBeersRemaining: PropTypes.func,
  remaining: PropTypes.number,
  clickedKeg: PropTypes.object,
  kegList: PropTypes.array
};

export default BeersList;
