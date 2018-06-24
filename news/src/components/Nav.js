import React, { Component } from 'react';
import "./css/s_nav.css";

class Nav extends Component {
  render() {
    return (
     <div className="nav position-sticky nav">

                <nav className=" center nav bar sticky-top navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="http://localhost:3005">OneSource</a>
    </div>
    <ul className="nav navbar-nav" bg-success>
      <li><a href="http://localhost:3005/world">World</a></li>
      <li><a href="http://localhost:3005/technology">Technology</a></li>
      <li><a href="http://localhost:3005/finance">Finance</a></li>
      <li><a href="http://localhost:3005/sports">Sports</a></li>
      <li><a href="http://localhost:3005/politics">Politics</a></li>
      <li><a href="http://localhost:3005/entertainment">Entertainment</a></li>
      
    </ul>
  </div>
</nav>
  
      </div>
    );
  }
}

export default Nav;


