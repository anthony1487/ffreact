import React, {Component} from 'react';
import "./css/s_header.css";

class Header extends Component {
  render() {
    return (
      <div>
      <div>
        <h1>OneSource</h1>
      </div>
      <div class="container">
          <div class="input-group">
              <input class="form-control border-right-0"/>
              <span class="input-group-addon bg-white border-left-0"><ion-icon name="search"></ion-icon></span>
          </div>
      </div>
      </div>
      );
  }
}

export default Header;
