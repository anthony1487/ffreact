import React, { Component } from 'react';
import Header from './Header';
import Ticker from './Ticker';
import Upper from './Upper';
import Nav from './Nav';
import Lower from './Lower';
class Main extends Component {
  render() {
    return (
      <div>
          <Header />
          <Ticker />
          <Upper />
          <Nav />
          <Lower />
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