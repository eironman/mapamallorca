import React, { Component } from 'react';
import { connect } from 'react-redux';
import HistoryMapLayer from './HistoryMapLayer';
import PoiLayer from './PoiLayer';
import InitialMap from './InitialMap';
import { initMap } from '../../actions/mapActions';
import { PALMA_LAT, PALMA_LNG } from '../../constants/constants';

/**
* Displays the map and the map menu
**/
export class MapController extends Component {

  // Create the map the first time the component is mounted and store the map instance
  componentDidMount() {
    this.props.dispatch(initMap(this.refs.mapRef.initMap()));
  }

  render() {
    return (
      <div className="h100">
        <div id="map"></div>
        <InitialMap
          ref={'mapRef'}
          elementId={'map'}
          lat={ PALMA_LAT }
          lng={ PALMA_LNG }
        />
        <HistoryMapLayer
          mapInstance={ this.props.mapInstance }
        />
        <PoiLayer
          mapInstance={ this.props.mapInstance }
        />
      </div>
    );
  }
}

// Connect class to redux
const mapStateToProps = (state) => {
  return {
    mapInstance: state.mapReducer.mapInstance
  };
};

export default connect(mapStateToProps)(MapController);