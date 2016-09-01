import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { togglePoi } from '../../actions/mapActions';
import { POIS } from '../../constants/constants';
import TallestBuildings from './TallestBuildings';

/**
* Options for selector of points of interest
**/
class PoiSelectorOptions extends Component {

  handlePoiSelect(poi) {
    this.props.dispatch(togglePoi(poi));
  }

  createItem(poiId, text)
  {
    return (
      <li>
        <a
          className={ this.props.poiSelected === poiId ? 'active' : '' }
          href="javascript:void(0)"
          onClick={ () => this.handlePoiSelect(poiId) }
        >
          { text }
        </a>
      </li>
    );
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
            <a href="javascript:void(0)">
              Edificios más altos
            </a>
            <TallestBuildings poiSelected={ poiSelected }/>
          </li>
          { this.createItem(POIS.CITY_WALL, 'Muralla Renacentista') }
          { this.createItem(POIS.BULLFIGHT, 'Coliseo Balear') }
          { this.createItem(POIS.BULLFIGHT_1865, 'Plaza de Toros (1865)') }
          { this.createItem(POIS.WATER_WINDMILLS, 'Molinos de Agua') }
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