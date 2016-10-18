import React, { Component, PropTypes } from 'react';
import HistoryMapLayerOpacity from './HistoryMapLayerOpacity';
import { MAP_INITIAL_OPACITY, PALMA_LAT, PALMA_LNG, MAP_BB_COORDS } from '../../constants/constants';

/**
* Displays in the map the layer of the year selected
**/
export default class HistoryMapLayer extends Component {

  constructor()
  {
    super();
    this.yearLayer = null;
  }

  // Centers map to the year map selected
  repositionMap()
  {
    this.props.mapInstance.panTo(new L.LatLng(PALMA_LAT, PALMA_LNG));
    this.props.mapInstance.setZoom(16);
  }

  // Shows the map of the year selected
  addYearLayer()
  {
    // Clear previous layer
    if (this.yearLayer !== null) {
      this.props.mapInstance.removeLayer(this.yearLayer);
    }

    // Add the year layer to the map
    if (this.props.mapSelected !== null) {
      
      // Boundig box of the map
      const bb = MAP_BB_COORDS[this.props.mapSelected];
      const northEast = L.latLng(bb.lat_ne, bb.lng_ne);
      const southWest = L.latLng(bb.lat_sw, bb.lng_sw);
      const bounds = L.latLngBounds(southWest, northEast);
      
      // Actual layer
      // TILES_SERVER is injected by webpack
      this.yearLayer = L.tileLayer(
        TILES_SERVER + this.props.mapSelected + '/{z}/{x}/{y}.png',
        {
          minZoom: 14,
          maxZoom: 18,
          opacity: MAP_INITIAL_OPACITY,
          bounds
        }
      ).addTo(this.props.mapInstance);
      
      // Move layer under possible POIs displayed
      this.yearLayer.bringToBack();

      // Position map to show the map selected
      this.repositionMap();      

    } else {
      this.yearLayer = null;
    }
  }

  render()
  {
    if (this.props.mapInstance !== null) {

      // Add map of the year selected
      this.addYearLayer();
      
      if (this.yearLayer !== null) {      
        return <HistoryMapLayerOpacity layer={ this.yearLayer } />;
      }
    }

    return null;
  }
}

// Class properties
HistoryMapLayer.propTypes = {
  mapSelected: PropTypes.number,
  mapInstance: PropTypes.object
};