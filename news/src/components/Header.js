import React, { Component } from 'react';
import logo from "./logo.png";
import "./css/s_header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
           <img src={logo} className="logo" alt="logo" />
         <h1 className="source">OneSource | {this.props.type}</h1>
         <div className="search input-group">
              <input className="form-control border-right-0"/>
              <span className="input-group-addon bg-white border-left-0"><ion-icon nameName="search"></ion-icon></span>
          </div>
      </div>
    );
  }
}

export default Header;
