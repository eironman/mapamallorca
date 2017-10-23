import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PoiFactory from '../../helpers/PoiFactory';

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

// Class properties
PoiLayer.propTypes = {
  mapInstance: PropTypes.object
};

// Connect class to redux
const mapStateToProps = (state) => {
  return {
    poiSelected: state.menuReducer.poiSelected
  };
};

export default connect(mapStateToProps)(PoiLayer);