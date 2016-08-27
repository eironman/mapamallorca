import React, { Component, PropTypes } from 'react';
import PoiBase from './PoiBase';
import { CARTODB_SHAPE_TABLE } from '../../../constants/constants';

/**
* Displays in the map the city wall
**/
export default class CityWall extends PoiBase {

}

// Id in cartoDB
CityWall.defaultProps = {
  poiId       : 3,
  cartodbTable: CARTODB_SHAPE_TABLE
}