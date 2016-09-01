import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { togglePoi } from '../../actions/mapActions';
import { POIS } from '../../constants/constants';

/**
* Options for selector of points of interest
**/
class TallestBuildings extends Component {

  handlePoiSelect(poiId)
  {
    this.props.dispatch(togglePoi(poiId));
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
      <ul>
        { this.createItem(POIS.TORRE_ES_FORTI, 'Torre Es Forti (72m)') }
        { this.createItem(POIS.AIRPORT_SANT_JOAN, 'Son Sant Joan (66m)') }
        { this.createItem(POIS.CATHEDRAL, 'Catedral de Palma (65m)') }
        { this.createItem(POIS.TORRE_ASIMA, 'Torre Asima (64m)') }
        { this.createItem(POIS.TORRES_PORTIXOL, 'Torres del Portixol (56m)') }
        { this.createItem(POIS.PUIG_ALARO, 'Puig d\'Alaró 12 (56m)') }
        { this.createItem(POIS.GABRIEL_ROCA, 'Gabriel Roca 16 (56m)') }
        { this.createItem(POIS.TORRE_HORNABEQUE, 'Torre Hornabeque (53m)') }
        { this.createItem(POIS.SANTANDER_BUILDING, 'Edificio Santander (53m)') }
        { this.createItem(POIS.COMPLEJO_PILLARI, 'Complejo Pil·larí (52m)') }
        { this.createItem(POIS.CREDITO_BALEAR, 'Crédito Balear (51m)') }
        { this.createItem(POIS.TORRE_MALLORCA, 'Torre Mallorca (51m)') }
      </ul>
    );
  }
}

TallestBuildings.propTypes = {
  poiSelected: PropTypes.number
}

export default connect()(TallestBuildings);
