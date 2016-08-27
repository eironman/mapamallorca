import React, { Component } from 'react';
import { connect } from 'react-redux';
import YearLayerOpacity from './YearLayerOpacity';
import { PALMA_LAT, PALMA_LNG, YEAR_BB_COORDS } from '../../constants/constants';

/**
* Displays in the map the layer of the year selected
**/
class YearLayer extends Component {

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
    if (this.props.yearSelected !== null) {
      
      // Boundig box of the map
      const bb = YEAR_BB_COORDS[this.props.yearSelected];
      const northEast = L.latLng(bb.lat_ne, bb.lng_ne);
      const southWest = L.latLng(bb.lat_sw, bb.lng_sw);
      const bounds = L.latLngBounds(southWest, northEast);
      
      // Actual layer
      this.yearLayer = L.tileLayer(
        'http://www.in.mapllorca.com/tiles/' + this.props.yearSelected + '/{z}/{x}/{y}.png',
        {
          minZoom: 14,
          maxZoom: 18,
          opacity: 0.8,
          bounds
        }
      ).addTo(this.props.mapInstance);
      
      // TODO: Not sure if moving the map is a good idea, try usability first
      // this.repositionMap();      

    } else {
      this.yearLayer = null;
    }
  }

  render() {

    if (this.props.mapInstance !== null) {

      // Add map of the year selected
      this.addYearLayer();
      
      if (this.yearLayer !== null) {      
        return <YearLayerOpacity layer={ this.yearLayer } />;
      }
    }

    return null;
  }
}

// Connect class to redux
const mapStateToProps = (state) => {
  return {
    mapInstance : state.mapReducer.mapInstance,
    yearSelected: state.mapReducer.yearSelected
  };
};

export default connect(mapStateToProps)(YearLayer);