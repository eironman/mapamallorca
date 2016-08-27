import React, { Component, PropTypes } from 'react';
import PoiBase from './PoiBase';
import { CARTODB_SPOT_TABLE } from '../../../constants/constants';

/**
* Points in the map the tallest building
**/
export default class TallestBuilding extends PoiBase {

}

// Id in cartoDB
TallestBuilding.defaultProps = {
  poiId       : 1,
  cartodbTable: CARTODB_SPOT_TABLE
}
