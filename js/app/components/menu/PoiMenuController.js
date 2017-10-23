import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeMenu, togglePoi } from '../../actions/menuActions';
import { hideInfoMessage } from '../../actions/appActions';
import { POIS } from '../../constants/constants';

/**
* Menu to select a poi
**/
class PoiMenuController extends Component {

  createMenuOption(poiId, text) {

    const tag = (
      <li
        key={ 'p_' + poiId }
        className={ (poiId === this.props.poiSelected) ? 'selected' : '' }
      >
        <p onClick={ () => this.props.onPoiSelect(poiId) }>&gt; {text}</p>
      </li>
    );

    return tag;
  }

  render() {
    
    return (
      <ul>
        { this.createMenuOption(POIS.CITY_WALL, 'Muralla renacentista') }
        { this.createMenuOption(POIS.CITY_RIVER, 'Sa Riera (recorrido original)') }
        { this.createMenuOption(POIS.BULLFIGHT_1865, 'Plaza de toros (1865)') }
        { this.createMenuOption(POIS.BULLFIGHT, 'Plaza de toros (actual)') }
        { this.createMenuOption(POIS.WATER_WINDMILLS, 'Molinos de agua') }
      </ul>
    );
  }
}

PoiMenuController.propTypes = {
  poiSelected: PropTypes.number
}

const mapDispatchToProps = dispatch => {
  return {
    onPoiSelect: poi => {
      dispatch(togglePoi(poi));
      dispatch(closeMenu());
      dispatch(hideInfoMessage());
    }
  }
}

// Connect class to redux
export default connect(null, mapDispatchToProps)(PoiMenuController);
