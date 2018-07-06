import React from 'react';
import HomePage from './HomePage';
import BeersList from './BeersList';
import MenuList from './MenuList';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <style jsx>{`
          background-color: black;
          height: 1200px;
      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path= '/beers' component={BeersList} />
        <Route exact path='/menu' component={MenuList} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
