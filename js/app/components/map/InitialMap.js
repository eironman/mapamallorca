import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
* Injects the map in the page
**/
export default class InitialMap extends Component {

  constructor()
  {
    super();
    this.mapInstance = null;
  }

  setCenter(lat, lng)
  {
    this.mapInstance.setCenter(new google.maps.LatLng(lat, lng));
  }

  initMap()
  {
    this.mapInstance = new L.Map('map', {
      zoomControl: false,
      center     : [this.props.lat, this.props.lng],
      zoom       : 16
    });
    
    // Zoom controls
    L.control.zoom({
         position:'bottomright'
    }).addTo(this.mapInstance);

    // Base map
    var ggl = new L.Google('HYBRID');
    this.mapInstance.addLayer(ggl);

    return this.mapInstance;
  }

  render()
  {
    return null;
  }
}

// Class properties
InitialMap.propTypes = {
  elementId: PropTypes.string.isRequired,
  lat      : PropTypes.number,
  lng      : PropTypes.number
};
