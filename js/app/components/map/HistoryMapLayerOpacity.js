import React, { Component, PropTypes } from 'react';

/**
* Displays in the map the opacity selector
**/
export default class HistoryMapLayerOpacity extends Component {


  onRangeSelect(e) {
    this.props.layer.setOpacity(e.currentTarget.value);
  }

  setDefaultValue() {
    $("#opacity").val(0.8);
  }

  componentDidUpdate() {
    this.setDefaultValue();
  }

  componentDidMount() {
    this.setDefaultValue();
  }

  render() {

    this.props.layer.setOpacity(0.8);

    return (
      <div id="opacity-container">
        <input
          type="range"
          id="opacity"
          min="0"
          max="1"
          step=".01"
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