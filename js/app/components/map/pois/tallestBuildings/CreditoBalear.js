import React, { Component } from 'react';
import PoiCartodbBase from '../PoiCartodbBase';
import { CARTODB_SPOT_TABLE } from '../../../../constants/constants';

export default class CreditoBalear extends PoiCartodbBase {

}

// Id in cartoDB
CreditoBalear.defaultProps = {
  poiId       : 12,
  cartodbTable: CARTODB_SPOT_TABLE
}
