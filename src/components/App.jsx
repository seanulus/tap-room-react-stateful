import React from 'react';
import HomePage from './HomePage';
import BeersList from './BeersList';
import MenuList from './MenuList';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedKeg: null,
      beersRemaining: 120,
      clickedKegBeers: 0
    };
    this.handleBeersRemaining = this.handleBeersRemaining.bind(this);
  }

  handleBeersRemaining(keg) {
    this.setState({
      clickedKeg: keg,
      clickedKegBeers: keg.remaining -= 1
    });
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
          <Route exact path= '/beers' render={()=><BeersList onBeersRemaining={this.handleBeersRemaining} remaining={this.state.beersRemaining} clickedKeg={this.state.clickedKeg} clickedKegBeers={this.state.clickedKegBeers}/>} />
          <Route exact path='/menu' component={MenuList} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
