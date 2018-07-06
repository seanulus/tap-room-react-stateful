import React from 'react';
import Links from './Links';
import { Link } from 'react-router-dom';

const linkList = [
  {
    title: 'Locations',
    links: ['Portland', 'Bend', 'Ashland']
  },
  {
    title: 'Contact',
    links: ['Phone', 'Email', 'Fax']
  },
  {
    title: 'Social Media',
    links: ['Facebook', 'Twitter', 'Instagram']
  },
  {
    title: 'Distributors',
    links: ['Maletis', 'Columbia Distributing', 'Point Blank']
  }
];

function LinkList() {
  return(
    <div>
      <style jsx>{`
          div {
            display: flex;
            justify-content: space-around;
            border-top: 1px solid white;
          }
      `}</style>
      {linkList.map((links, index) =>
        <Links title = {links.title}
          links = {links.links}
          key={index}/>
      )}
      <Link to='/admin'>Admin</Link>
    </div>
  );
}

export default LinkList;
