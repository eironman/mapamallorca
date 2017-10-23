import React, { Component } from 'react';
import PoiCartodbBase from './PoiCartodbBase';
import { CARTODB_SHAPE_TABLE } from '../../../constants/constants';

/**
* Displays in the map the city wall
**/
export default class CityWall extends PoiCartodbBase {

}

// Id in cartoDB
CityWall.defaultProps = {
  poiId       : [3],
  cartodbTable: CARTODB_SHAPE_TABLE
}