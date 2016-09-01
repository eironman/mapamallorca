import React, { Component } from 'react';
import PoiCartodbBase from '../PoiCartodbBase';
import { CARTODB_SPOT_TABLE } from '../../../../constants/constants';

export default class Airport extends PoiCartodbBase {

}

// Id in cartoDB
Airport.defaultProps = {
  poiId       : 3,
  cartodbTable: CARTODB_SPOT_TABLE
}
