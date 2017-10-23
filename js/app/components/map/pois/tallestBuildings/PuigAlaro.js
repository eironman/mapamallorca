import React, { Component } from 'react';
import PoiCartodbBase from '../PoiCartodbBase';
import { CARTODB_SPOT_TABLE } from '../../../../constants/constants';

export default class PuigAlaro extends PoiCartodbBase {

}

// Id in cartoDB
PuigAlaro.defaultProps = {
  poiId       : [10],
  cartodbTable: CARTODB_SPOT_TABLE
}
