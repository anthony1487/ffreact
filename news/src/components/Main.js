import React, { Component } from 'react';
import Header from './Header';
import Ticker from './Ticker';
import Upper from './Upper';

class Main extends Component {
  render() {
    return (
      <div>
          <Header />
          <Ticker />
          <Upper />
          {/* 
          <Lower />
          <Footer /> */}
      </div>
    );
  }
}

export default Main;