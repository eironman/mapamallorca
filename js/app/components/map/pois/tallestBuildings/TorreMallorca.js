import React, { Component } from 'react';
import PoiCartodbBase from '../PoiCartodbBase';
import { CARTODB_SPOT_TABLE } from '../../../../constants/constants';

export default class TorreMallorca extends PoiCartodbBase {

}

// Id in cartoDB
TorreMallorca.defaultProps = {
  poiId       : 13,
  cartodbTable: CARTODB_SPOT_TABLE
}
