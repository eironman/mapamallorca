import React, { Component } from 'react';
import PoiCartodbBase from '../PoiCartodbBase';
import { CARTODB_SPOT_TABLE } from '../../../../constants/constants';

export default class ComplejoPillari extends PoiCartodbBase {

}

// Id in cartoDB
ComplejoPillari.defaultProps = {
  poiId       : [8],
  cartodbTable: CARTODB_SPOT_TABLE
}
