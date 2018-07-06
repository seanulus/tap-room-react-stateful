import React from 'react';
import Menu from './Menu';
import brisket from '../assets/img/brisket.jpg';
import chicken from '../assets/img/chicken.jpg';
import ribs from '../assets/img/ribs.jpg';
import salmon from '../assets/img/salmon.jpg';
import brat from '../assets/img/brat-sando.jpg';
import pork from '../assets/img/pork-sando.jpg';

const menuList = [
  {
    item: 'Smoked Brisket',
    description: 'Smoked 10hrs',
    price: '$14',
    image: brisket
  },
  {
    item: 'Smoked Fried Chicken',
    description: 'Smoked 4hrs',
    price: '$9',
    image: chicken
  },
  {
    item: 'Smoked BBQ Ribs',
    description: 'Smoked 4hrs',
    price: '$13',
    image: ribs
  },
  {
    item: 'Smoked Salmon Filet',
    description: 'Smoked 2hrs',
    price: '$14',
    image: salmon
  },
  {
    item: 'House Smoked Bratwurst Sandwich',
    description: 'Smoked Brat with Stone Ground Mustard and Kraut on a Kaiser',
    price: '$9',
    image: brat
  },
  {
    item: 'Smoked Pulled Pork Sandwich',
    description: 'Smoked 12hrs & Tossed in Spicy Vinegar Sauce with Slaw',
    price: '$10',
    image: pork
  }
];

function MenuList() {
  return(
    <div>
      <style jsx>{`
          div {
            display: grid;
            grid-template-rows: repeat(3, 1fr);
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px;
            padding-top: 30px;
            padding-left: 20px;
            color: white;
          }
          @media screen and (max-width: 720px) {
            div {
              display: block;
            }
          }
      `}</style>
      {menuList.map((food, index) =>
        <Menu item = {food.item}
          description = {food.description}
          price = {food.price}
          image = {food.image}
          key={index}/>
      )}
    </div>
  );
}

export default MenuList;
