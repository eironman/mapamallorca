import React, { Component, PropTypes } from 'react';
import PoiBase from './PoiBase';
import { CARTODB_SHAPE_TABLE } from '../../../constants/constants';

/**
* Displays in the map the bullfight arena
**/
export default class Bullfight1865 extends PoiBase {

}

// Id in cartoDB
Bullfight1865.defaultProps = {
  poiId       : 8,
  cartodbTable: CARTODB_SHAPE_TABLE
}