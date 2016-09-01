import React, { Component } from 'react';
import PoiCartodbBase from '../PoiCartodbBase';
import { CARTODB_SPOT_TABLE } from '../../../../constants/constants';

export default class SantanderBuilding extends PoiCartodbBase {

}

// Id in cartoDB
SantanderBuilding.defaultProps = {
  poiId       : 7,
  cartodbTable: CARTODB_SPOT_TABLE
}
