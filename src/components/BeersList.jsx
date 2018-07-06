import React from 'react';
import Beers from './Beers';
import hiWheel from '../assets/img/hi-wheel.jpg';
import hamms from '../assets/img/hamms.jpeg';
import newBelgium from '../assets/img/new-belgium.png';
import ninkasi from '../assets/img/ninkasi.jpg';
import epic from '../assets/img/epic.jpg';
import boneyard from '../assets/img/boneyard.jpg';
import wildcraft from '../assets/img/wildcraft.jpg';

const masterKegList = [
  {
    name: 'Ruby Zozzle',
    brewer: 'Hi-Wheel',
    description: 'Sparkling Wine',
    abv: '6.8%',
    price: '7',
    remaining: '20',
    image: hiWheel
  },
  {
    name: 'Tart N Juicy',
    brewer: 'Epic',
    description: 'Sour IPA',
    abv: '4.5%',
    price: '6',
    remaining: '60',
    image: epic
  },
  {
    name: 'Hamm\'s',
    brewer: 'Miller/Coors',
    description: 'American Lager',
    abv: '4.7%',
    price: '3',
    remaining: '65',
    image: hamms
  },
  {
    name: 'Prismatic',
    brewer: 'Ninkasi',
    description: 'Juicy IPA',
    abv:  '5.9%',
    price: '6',
    remaining: '75',
    image: ninkasi
  },
  {
    name: 'Juicy Haze',
    brewer: 'New Belgium',
    description: 'India Pale Ale',
    abv:  '7.5%',
    price: '6',
    remaining: '18',
    image: newBelgium
  },
  {
    name: '8 Hop',
    brewer: 'New Belgium',
    description: 'Pale Ale',
    abv:  '5.5%',
    price: '6',
    remaining: '58',
    image: newBelgium
  },
  {
    name: '8 Hop',
    brewer: 'Boneyard',
    description: 'Notorius',
    abv:  '11.5%',
    price: '6',
    remaining: '64',
    image: boneyard
  },
  {
    name: 'Sage Cider',
    brewer: 'Wildcraft',
    description: 'Dry Cider',
    abv:  '7.4%',
    price: '6',
    remaining: '48',
    image: wildcraft
  }
];




function BeersList(){
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

      {masterKegList.map((beer, index) =>
        <Beers brewer = {beer.brewer}
          name = {beer.name}
          description = {beer.description}
          abv = {beer.abv}
          price = {beer.price}
          remaining = {beer.remaining}
          image = {beer.image}
          key={index}/>
      )}
    </div>
  );
}

export default BeersList;
