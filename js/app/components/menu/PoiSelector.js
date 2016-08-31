import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { togglePoi } from '../../actions/mapActions';
import { POIS } from '../../constants/constants';
import { arrayContains } from '../../helpers/arrayHelper';

/**
* Options for selector of points of interest
**/
class PoiSelectorOptions extends Component {

  handlePoiSelect(poi) {
    this.props.dispatch(togglePoi(poi));
  }

  render()
  {
    const poiSelected = this.props.poiSelected;
    return (
      <li>
        <a href="javascript:void(0)">
          Puntos de Interés
        </a>
        <ul>
          <li>
            <a
              className={ poiSelected === POIS.CITY_WALL ? 'active' : '' }
              href="javascript:void(0)"
              onClick={ () => this.handlePoiSelect(POIS.CITY_WALL) }
            >
              Muralla Renacentista
            </a>
          </li>
          <li>
            <a
              className={ poiSelected === POIS.BULLFIGHT ? 'active' : '' }
              href="javascript:void(0)"
              onClick={ () => this.handlePoiSelect(POIS.BULLFIGHT) }
            >
              Coliseo Balear
            </a>
          </li>
          <li>
            <a
              className={ poiSelected === POIS.BULLFIGHT_1865 ? 'active' : '' }
              href="javascript:void(0)"
              onClick={ () => this.handlePoiSelect(POIS.BULLFIGHT_1865) }
            >
              Plaza de toros (1865)
            </a>
          </li>
          <li>
            <a
              className={ poiSelected === POIS.TORRE_ES_FORTI ? 'active' : '' }
              href="javascript:void(0)"
              onClick={ () => this.handlePoiSelect(POIS.TORRE_ES_FORTI) }
            >
              Edificio más alto
            </a>
          </li>
          <li>
            <a
              className={ poiSelected === POIS.WATER_WINDMILLS ? 'active' : '' }
              href="javascript:void(0)"
              onClick={ () => this.handlePoiSelect(POIS.WATER_WINDMILLS) }
            >
              Molinos de agua
            </a>
          </li>
        </ul>
      </li>
    );
  }
}

// Connect class to redux
const mapStateToProps = (state) => {
  return {
    poiSelected: state.mapReducer.poiSelected
  };
};

export default connect(mapStateToProps)(PoiSelectorOptions);