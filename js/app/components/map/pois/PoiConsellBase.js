import React, { Component, PropTypes } from 'react';
import InfoCard from '../InfoCard';

/**
* Displays in the map the windmills
**/
export default class PoiConsellBase extends Component {

  constructor()
  {
    super();
    this.poiLayer = null;
  }

  componentDidMount()
  {
    // Add layer to map
    this.poiLayer =
      L.tileLayer.wms('http://www.conselldemallorca.net/ide/ws_patrimoni/MapServer/WMSServer', {
        layers     : this.props.layerName,
        format     : 'image/png',
        transparent: true,
        attribution: '© IDEmallorca. Consell de Mallorca 2010'
      }).addTo(this.props.mapInstance);

    // Fit map to the bb of the layer
    const bounds = [
      [this.props.bbLatN, this.props.bbLngW],
      [this.props.bbLatS, this.props.bbLngE]
    ];
    this.props.mapInstance.fitBounds(bounds);

    // Load layer info
    this.refs.infoCard.loadContent(this.props.dataTitle, this.props.dataText);
  }

  // Remove layer from map
  componentWillUnmount()
  {
    this.props.mapInstance.removeLayer(this.poiLayer);
  }

  render()
  {
    return (<InfoCard ref={ 'infoCard' } />);
  }
}

PoiConsellBase.propTypes = {
  mapInstance: PropTypes.object,
  layerName  : PropTypes.string,
  bbLatN     : PropTypes.number,
  bbLngW     : PropTypes.number,
  bbLatS     : PropTypes.number,
  bbLngE     : PropTypes.number,
  dataTitle  : PropTypes.string,
  dataText   : PropTypes.string
}
