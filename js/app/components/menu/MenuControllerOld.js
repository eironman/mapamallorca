import React, { Component } from 'react';
import YearSelector from './YearSelector';
import PoiSelector from './PoiSelector';

/**
* Menu with the actions to perform in the map
**/
export default class MenuController extends Component {

  componentDidMount() {
    $(".flexnav").flexNav();
  }

  render() {
    return (
      <div>
        <div className="menu-button">Menu</div>
        <nav>
          <ul data-breakpoint="800" className="flexnav">
            <YearSelector />
            <PoiSelector />
          </ul>
        </nav>
      </div>
    );
  }
}
