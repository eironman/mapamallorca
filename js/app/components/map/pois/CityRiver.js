import React, { Component } from 'react';
import PoiCartodbBase from './PoiCartodbBase';
import { CARTODB_SHAPE_TABLE } from '../../../constants/constants';

/**
* Displays in the map the city river
**/
export default class CityRiver extends PoiCartodbBase {

  poiStyles()
  {
    const styles =
      '#shape {' +
        'polygon-fill: #3E7BB6;' +
        'polygon-opacity: 0.9;' +
        'line-color: #FFF;' +
        'line-width: 0.5;' +
        'line-opacity: 1;' +
      '}';

    return styles;
  }
}

// Id in cartoDB
CityRiver.defaultProps = {
  poiId       : [9, 12, 13],
  cartodbTable: CARTODB_SHAPE_TABLE
}