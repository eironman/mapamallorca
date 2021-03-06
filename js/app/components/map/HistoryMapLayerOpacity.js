import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MAP_INITIAL_OPACITY } from '../../constants/constants';

/**
* Displays in the map the opacity selector
**/
export default class HistoryMapLayerOpacity extends Component {


  onRangeSelect(e) {
    this.props.layer.setOpacity(e.currentTarget.value);
  }

  setDefaultValue() {
    $("#opacity").val(MAP_INITIAL_OPACITY);
  }

  componentDidUpdate() {
    this.setDefaultValue();
  }

  componentDidMount() {
    this.setDefaultValue();
  }

  render() {

    this.props.layer.setOpacity(MAP_INITIAL_OPACITY);

    return (
      <div id="opacity-container">
        <input
          type="range"
          id="opacity"
          min="0"
          max="1"
          step=".01"
          className="slider"
          onChange={ (e) => this.onRangeSelect(e) }
        />
      </div>
    );
  }
}

// Class properties
HistoryMapLayerOpacity.propTypes = {
  layer: PropTypes.object
};