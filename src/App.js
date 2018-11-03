import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from  './components/venueNfo';
import Hightlights from './components/Highlights';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: "1500px"}}>
        <Header />
        <Featured />
        <VenueNfo />
        <Hightlights />
      </div>
    );
  }
}

export default App;
