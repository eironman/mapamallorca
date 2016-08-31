import React, { Component, PropTypes } from 'react';
import PoiCartodbBase from './PoiCartodbBase';
import { CARTODB_SHAPE_TABLE } from '../../../constants/constants';

/**
* Displays in the map the bullfight arena
**/
export default class Bullfight extends PoiCartodbBase {

}

// Id in cartoDB
Bullfight.defaultProps = {
  poiId       : 6,
  cartodbTable: CARTODB_SHAPE_TABLE
}