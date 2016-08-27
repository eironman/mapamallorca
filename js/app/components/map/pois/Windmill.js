import React, { Component, PropTypes } from 'react';

/**
* Displays in the map the windmills
**/
export default class Windmill extends Component {

  constructor() {
    super();
    this.windmillLayer = null;
  }

  // Add layer to map
  componentDidMount() {
    this.windmillLayer =
      L.tileLayer.wms('http://www.conselldemallorca.net/ide/ws_patrimoni/MapServer/WMSServer', {
        layers     : ['3'],
        format     : 'image/png',
        transparent: true,
        attribution: '© IDEmallorca. Consell de Mallorca 2010'
      }).addTo(this.props.mapInstance);
  }

  // Remove layer from map
  componentWillUnmount() {
    this.props.mapInstance.removeLayer(this.windmillLayer);
  }

  render() {
    return null;
  }
}

Windmill.propTypes = {
  mapInstance: PropTypes.object
}
