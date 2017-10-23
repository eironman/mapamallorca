import React, { Component } from 'react';
import PoiCartodbBase from '../PoiCartodbBase';
import { CARTODB_SPOT_TABLE } from '../../../../constants/constants';

export default class TorresPortixol extends PoiCartodbBase {

}

// Id in cartoDB
TorresPortixol.defaultProps = {
  poiId       : [9],
  cartodbTable: CARTODB_SPOT_TABLE
}
