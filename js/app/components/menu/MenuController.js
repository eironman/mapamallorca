import React, { Component } from 'react';
import YearSelector from './YearSelector';
import PoiSelector from './PoiSelector';
import PoiSelectorOptions from './PoiSelectorOptions';

/**
* Menu with the actions to perform in the map
**/
export default class MenuController extends Component {

  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  render() {
    return (
      <div className="navbar-fixed">
        
        <ul id="poi-dropdown" className="dropdown-content">
          <PoiSelectorOptions />
        </ul>

        <nav>
          <div className="nav-wrapper blue">
            <a href="#" data-activates="mobile-demo" className="button-collapse">
              <i className="material-icons">menu</i>
            </a>
            
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <YearSelector />
              <PoiSelector />
            </ul>

            <ul id="mobile-demo" className="side-nav">
              <YearSelector />
              <li className="divider"></li>
              <PoiSelectorOptions />
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
