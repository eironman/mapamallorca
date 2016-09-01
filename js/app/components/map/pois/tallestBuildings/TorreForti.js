import React, { Component } from 'react';
import PoiCartodbBase from '../PoiCartodbBase';
import { CARTODB_SPOT_TABLE } from '../../../../constants/constants';

/**
* Points in the map the tallest building
**/
export default class TorreForti extends PoiCartodbBase {

}

// Id in cartoDB
TorreForti.defaultProps = {
  poiId       : 1,
  cartodbTable: CARTODB_SPOT_TABLE
}
