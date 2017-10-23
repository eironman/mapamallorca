import React, { Component } from 'react';
import PoiCartodbBase from '../PoiCartodbBase';
import { CARTODB_SPOT_TABLE } from '../../../../constants/constants';

export default class TorreAsima extends PoiCartodbBase {

}

// Id in cartoDB
TorreAsima.defaultProps = {
  poiId       : [5],
  cartodbTable: CARTODB_SPOT_TABLE
}
