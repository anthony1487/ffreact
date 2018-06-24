import React, { Component } from 'react';
import Header from './Header';
import Ticker from './Ticker';
import Upper from './Upper';
import Nav from './Nav';
class Main extends Component {
  render() {
    return (
      <div>
          <Header />
          <Ticker />
          <Upper />
          <Nav />
          <Header />
          <Header />
          <Header />
          <Header />
          {/* 
          <Lower />
          <Footer /> */}
      </div>
    );
  }
}

export default Main;