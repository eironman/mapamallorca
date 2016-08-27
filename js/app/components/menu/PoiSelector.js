import React, { Component, PropTypes } from 'react';

/**
* Selector of points of interest
**/
export default class PoiSelector extends Component {

  componentDidMount() {
    $(".dropdown-button").dropdown({ hover: true });
  }

  render() {
    return (
      <li>
        <a className="dropdown-button" href="#!" data-activates="poi-dropdown">
          Puntos de Interés<i className="material-icons right">arrow_drop_down</i>
        </a>
      </li>
    );
  }
}
