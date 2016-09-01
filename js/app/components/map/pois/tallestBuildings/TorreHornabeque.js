import React, { Component } from 'react';
import PoiCartodbBase from '../PoiCartodbBase';
import { CARTODB_SPOT_TABLE } from '../../../../constants/constants';

export default class TorreHornabeque extends PoiCartodbBase {

}

// Id in cartoDB
TorreHornabeque.defaultProps = {
  poiId       : 6,
  cartodbTable: CARTODB_SPOT_TABLE
}
