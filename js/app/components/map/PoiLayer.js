import React, { Component } from 'react';
import { connect } from 'react-redux';
import PoiFactory from '../../helpers/PoiFactory';
import { arrayContains } from '../../helpers/arrayHelper';


/**
* Displays in the map the points of interest selected
**/
class PoiLayer extends Component {

  render()
  {
    const factory = new PoiFactory();
    return factory.getPoi(this.props.poiSelected, this.props.mapInstance);
  }
}

// Connect class to redux
const mapStateToProps = (state) => {
  return {
    mapInstance: state.mapReducer.mapInstance,
    poiSelected: state.mapReducer.poiSelected
  };
};

export default connect(mapStateToProps)(PoiLayer);