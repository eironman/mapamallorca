import React, { Component, PropTypes } from 'react';
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
export default class PoiBase extends Component {

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
        this.triggerInfowindow(bounds);
      });
  }

  // Shows the infowindow
  // The point to simulate the click event is calculated using
  // the coords of the bounding box
  triggerInfowindow(bounds) {

    // Calculate coords
    const latLngNE = bounds[0];
    const latLngSW = bounds[1];
    const latLng = [((latLngNE[0] + latLngSW[0]) / 2), ((latLngNE[1] + latLngSW[1]) / 2)];

    // Retrieve data to show in the infowindow
    this.sql.execute(this.query)
      .done((data) => {
        
        const infowindowData = {
          name       : data.rows[0].name,
          description: data.rows[0].description
        };

        this.poiLayer
          .getSubLayer(0)
          .trigger('featureClick', null, latLng, null, infowindowData, 0);
      });
  }

  // Returns the style for the poi
  poiStyles()
  {
    let styles;

    if (this.isShape) {

      styles =
        '#shape {' +
          'polygon-fill: #0d47a1;' +
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
          'marker-width: 10;' +
          'marker-fill: #0d47a1;' +
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
    return null;
  }
}

PoiBase.propTypes = {
  poiId       : PropTypes.number,
  mapInstance : PropTypes.object,
  cartodbTable: PropTypes.string
}
