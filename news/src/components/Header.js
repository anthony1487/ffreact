import React, {Component} from 'react';
import "./css/s_header.css";

class Header extends Component {
  render() {
    return (
      <div>
      <h1>OneSource</h1>
      <div class="flex-container"></div>
        <form class="form-inline md-form form-sm">
          <i class="fa fa-search" aria-hidden="true"></i>
          <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search"></input>
        </form>
      </div>
      );
  }
}

export default Header;
