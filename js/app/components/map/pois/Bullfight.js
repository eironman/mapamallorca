import React, { Component, PropTypes } from 'react';
import PoiBase from './PoiBase';
import { CARTODB_SHAPE_TABLE } from '../../../constants/constants';

/**
* Displays in the map the bullfight arena
**/
export default class Bullfight extends PoiBase {

}

// Id in cartoDB
Bullfight.defaultProps = {
  poiId       : 6,
  cartodbTable: CARTODB_SHAPE_TABLE
}