import React, { Component, PropTypes } from 'react';
import InfoCard from '../InfoCard';
import {
  CARTODB_USER,
  INFOWINDOW_TEMPLATE,
  CARTODB_SHAPE_TABLE,
  CARTODB_SPOT_TABLE
} from '../../../constants/constants';

/**
* Base class for shapes
* Displays a shape in the map
**/
export default class PoiCartodbBase extends Component {

  constructor(props)
  {
    super(props);
    this.poiLayer = null;
    this.sql = new cartodb.SQL({ user: CARTODB_USER });
    this.query = 'SELECT * FROM ' + props.cartodbTable + ' WHERE cartodb_id = ' + props.poiId;
    // Shape or spot
    this.isShape = (this.props.cartodbTable === CARTODB_SHAPE_TABLE);
  }

  // Sets map bounds where the poi is
  repositionMap()
  {
    this.sql.getBounds(this.query)
      .done((bounds) => {
        this.props.mapInstance.fitBounds(bounds, { maxZoom: (this.isShape ? 16 : 18)});
        this.showPoiInfo(bounds);
      });
  }

  // Retrieves the POI info and shows it in the info card
  showPoiInfo(bounds) {

    // Retrieve data to show in the info card
    this.sql.execute(this.query)
      .done((data) => {
        this.refs.infoCard.loadContent(data.rows[0].name, data.rows[0].description);
      });
  }

  // Returns the default styles for shapes and pois
  poiStyles()
  {
    let styles;

    if (this.isShape) {

      styles =
        '#shape {' +
          'polygon-fill: #7B00B4;' +
          'polygon-opacity: 0.9;' +
          'line-color: #FFF;' +
          'line-width: 0.5;' +
          'line-opacity: 1;' +
        '}';

    } else {

      styles =
        '#spot {' +
          'marker-fill-opacity: 0.9;' +
          'marker-line-color: #FFF;' +
          'marker-line-width: 1;' +
          'marker-line-opacity: 1;' +
          'marker-placement: point;' +
          'marker-type: ellipse;' +
          'marker-width: 20;' +
          'marker-fill: #7B00B4;' +
          'marker-allow-overlap: true;' +
        '}';
    }

    return styles;
  }

  componentDidMount()
  {
    const map = this.props.mapInstance;
    const layerData = {
      user_name: CARTODB_USER,
      type     : 'cartodb',
      sublayers: [{
        cartocss: this.poiStyles(),
        sql     : this.query
      }]
    };

    // Add the poi to the map
    cartodb.createLayer(map, layerData)
      .addTo(map)
      .done((layer) => {
        this.poiLayer = layer;

        // Infowindow
        cdb.vis.Vis.addInfowindow(map, layer.getSubLayer(0), ['name', 'description'], {
          infowindowTemplate: INFOWINDOW_TEMPLATE
        });
      });

    // Reposition map where the shape is
    this.repositionMap();
  }

  // Remove layer from map
  componentWillUnmount()
  {
    this.poiLayer.hide();
  }

  render()
  {
    return (<InfoCard ref={ 'infoCard' } />);
  }
}

PoiCartodbBase.propTypes = {
  poiId       : PropTypes.number,
  mapInstance : PropTypes.object,
  cartodbTable: PropTypes.string
}
