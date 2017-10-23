import React, { Component } from 'react';
import PoiCartodbBase from '../PoiCartodbBase';
import { CARTODB_SPOT_TABLE } from '../../../../constants/constants';

export default class GabrielRoca extends PoiCartodbBase {

}

// Id in cartoDB
GabrielRoca.defaultProps = {
  poiId       : [11],
  cartodbTable: CARTODB_SPOT_TABLE
}
