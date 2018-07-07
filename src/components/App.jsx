import React from 'react';
import HomePage from './HomePage';
import BeersList from './BeersList';
import MenuList from './MenuList';
import Header from './Header';
import Footer from './Footer';
import Admin from './Admin';
import { Switch, Route } from 'react-router-dom';

import { v4 } from 'uuid';
import hiWheel from '../assets/img/hi-wheel.jpg';
import hamms from '../assets/img/hamms.jpeg';
import newBelgium from '../assets/img/new-belgium.png';
import ninkasi from '../assets/img/ninkasi.jpg';
import epic from '../assets/img/epic.jpg';
import boneyard from '../assets/img/boneyard.jpg';
import wildcraft from '../assets/img/wildcraft.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        {
          name: 'Ruby Zozzle',
          brewer: 'Hi-Wheel',
          description: 'Sparkling Wine',
          abv: '6.8%',
          price: '7',
          image: hiWheel,
          id: v4()
        },
        {
          name: 'Tart N Juicy',
          brewer: 'Epic',
          description: 'Sour IPA',
          abv: '4.5%',
          price: '6',
          image: epic,
          id: v4()
        },
        {
          name: 'Hamm\'s',
          brewer: 'Miller/Coors',
          description: 'American Lager',
          abv: '4.7%',
          price: '3',
          image: hamms,
          id: v4()
        },
        {
          name: 'Prismatic',
          brewer: 'Ninkasi',
          description: 'Juicy IPA',
          abv:  '5.9%',
          price: '6',
          image: ninkasi,
          id: v4()
        },
        {
          name: 'Juicy Haze',
          brewer: 'New Belgium',
          description: 'India Pale Ale',
          abv:  '7.5%',
          price: '6',
          image: newBelgium,
          id: v4()
        },
        {
          name: '8 Hop',
          brewer: 'New Belgium',
          description: 'Pale Ale',
          abv:  '5.5%',
          price: '6',
          image: newBelgium,
          id: v4()
        },
        {
          name: '8 Hop',
          brewer: 'Boneyard',
          description: 'Notorius',
          abv:  '11.5%',
          price: '6',
          image: boneyard,
          id: v4()
        },
        {
          name: 'Sage Cider',
          brewer: 'Wildcraft',
          description: 'Dry Cider',
          abv:  '7.4%',
          price: '6',
          image: wildcraft,
          id: v4()
        }
      ],

      clickedKeg: {remaining: 120},
      beersRemaining: 120,
    };
    this.handleBeersRemaining = this.handleBeersRemaining.bind(this);
  }

  handleBeersRemaining(keg) {
    this.setState({
      clickedKeg: keg,
      // beersRemaining: this.state.beersRemaining -= 1
    });
    if (keg.id === keg.id){
      keg.remaining -= 1;
    }
  }

  render() {

    return (
      <div>
        <style jsx>{`
            background-color: black;
            height: 1200px;
        `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path= '/beers' render={()=><BeersList kegList={this.state.masterKegList} onBeersRemaining={this.handleBeersRemaining} remaining={this.state.beersRemaining} clickedKeg={this.state.clickedKeg} />} />
          <Route exact path='/menu' component={MenuList} />
          <Route exact path='/admin' component={Admin} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
