import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectPoi } from '../../actions/mapActions';
import { POIS } from '../../constants/constants';
import { arrayContains } from '../../helpers/arrayHelper';

/**
* Options for selector of points of interest
**/
class PoiSelectorOptions extends Component {

  handlePoiSelect(poi) {
    this.props.dispatch(selectPoi(poi));
  }

  render() {
    return (
      <li>
        <a href="javascript:void(0)">
          Puntos de Interés
        </a>
        <ul>
          <li>
            <a
              href="javascript:void(0)"
              onClick={ () => this.handlePoiSelect(POIS.CITY_WALL) }
            >
              Muralla Renacentista
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              onClick={ () => this.handlePoiSelect(POIS.BULLFIGHT) }
            >
              Coliseo Balear
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              onClick={ () => this.handlePoiSelect(POIS.BULLFIGHT_1865) }
            >
              Plaza de toros (1865)
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              onClick={ () => this.handlePoiSelect(POIS.TORRE_ES_FORTI) }
            >
              Edificio más alto
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              onClick={ () => this.handlePoiSelect(POIS.WINDMILLS) }
            >
              Molinos de agua
            </a>
          </li>
        </ul>
      </li>
    );
  }
}

export default connect()(PoiSelectorOptions);