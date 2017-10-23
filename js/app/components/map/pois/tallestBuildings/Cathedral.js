import React, { Component } from 'react';
import PoiCartodbBase from '../PoiCartodbBase';
import { CARTODB_SPOT_TABLE } from '../../../../constants/constants';

export default class Cathedral extends PoiCartodbBase {

}

// Id in cartoDB
Cathedral.defaultProps = {
  poiId       : [4],
  cartodbTable: CARTODB_SPOT_TABLE
}
