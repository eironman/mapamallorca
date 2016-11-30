import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { closeMenu, togglePoi } from '../../actions/menuActions';
import { hideInfoMessage } from '../../actions/appActions';
import { POIS } from '../../constants/constants';

/**
* Menu to select a tall building
**/
class TallBuildingsMenuController extends Component {

  createMenuOption(poiId, text) {

    const tag = (
      <li
        key={ 'p_' + poiId }
        className={ (poiId === this.props.poiSelected) ? 'selected' : '' }
      >
        <p onClick={ () => this.handlePoiSelect(poiId) }>&gt; {text}</p>
      </li>
    );

    return tag;
  }

  // Select a poi
  handlePoiSelect(poi) {
    this.props.dispatch(togglePoi(poi));
    this.props.dispatch(closeMenu());
    this.props.dispatch(hideInfoMessage());
  }

  render() {
    
    return (
      <ul>
        { this.createMenuOption(POIS.TORRE_ES_FORTI, 'Torre es fortí (72m)') }
        { this.createMenuOption(POIS.AIRPORT_SANT_JOAN, 'Aeropuerto (66m)') }
        { this.createMenuOption(POIS.CATHEDRAL, 'Catedral (65m)') }
        { this.createMenuOption(POIS.TORRE_ASIMA, 'Torre Asima (64m)') }
        { this.createMenuOption(POIS.TORRES_PORTIXOL, 'Torres del Portixol (56m)') }
        { this.createMenuOption(POIS.PUIG_ALARO, 'Puig d\'Alaró (56m)') }
        { this.createMenuOption(POIS.GABRIEL_ROCA, 'Gabriel Roca (56m)') }
        { this.createMenuOption(POIS.TORRE_HORNABEQUE, 'Torre Hornabeque (53m)') }
        { this.createMenuOption(POIS.SANTANDER_BUILDING, 'Edificio Santander (53m)') }
        { this.createMenuOption(POIS.COMPLEJO_PILLARI, 'Complejo Pil·larí (52m)') }
        { this.createMenuOption(POIS.CREDITO_BALEAR, 'Crédito Balear (51m)') }
        { this.createMenuOption(POIS.TORRE_MALLORCA, 'Torre Mallorca (51m)') }
      </ul>
    );
  }
}

TallBuildingsMenuController.propTypes = {
  poiSelected: PropTypes.number
}

// Connect class to redux
export default connect()(TallBuildingsMenuController);
