import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleMap } from '../../actions/menuActions';
import { hideFullScreenMessage } from '../../actions/appActions';
import { MAPS } from '../../constants/constants';

/**
* Menu to select a map
**/
class MapsMenuController extends Component {

  createMenuOption(mapId, text) {

    const tag = (
      <li className={ (mapId === this.props.mapSelected) ? 'selected' : '' }>
        <p onClick={ () => this.handleMapSelect(mapId) }>&gt; {text}</p>
      </li>
    );

    return tag;
  }

  // Select a map
  handleMapSelect(map) {
    this.props.dispatch(toggleMap(map));
    this.props.dispatch(hideFullScreenMessage());
  }

  render() {

    return (
      <ul>
        { this.createMenuOption(MAPS.CIVITAS, '1644') }
        { this.createMenuOption(MAPS.ALCANTARA_PENA, '1869') }
        { this.createMenuOption(MAPS.DEFENSA_BAHIA, 'Defensa de la bahía') }
        { this.createMenuOption(MAPS.SAN_CARLOS, 'Baluarte de San Carlos') }
      </ul>
    );
  }
}

MapsMenuController.propTypes = {
  mapSelected: PropTypes.number
}

// Connect class to redux
export default connect()(MapsMenuController);
