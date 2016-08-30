import React, { Component, PropTypes } from 'react';
import PoiFactory from '../../helpers/PoiFactory';

/**
* Displays in the map the points of interest selected
**/
export default class PoiLayer extends Component {

  render()
  {
    const factory = new PoiFactory();
    return factory.getPoi(this.props.poiSelected, this.props.mapInstance);
  }
}

// Class properties
PoiLayer.propTypes = {
  poiSelected: PropTypes.number,
  mapInstance: PropTypes.object
};
