import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideFullScreenMessage } from '../../actions/appActions';
import { openMenu, closeMenu } from '../../actions/menuActions';
import MapsMenuController from './MapsMenuController';
import PoiMenuController from './PoiMenuController';
import TallBuildingsMenuController from './TallBuildingsMenuController';

/**
* Global menu
**/
class MenuController extends Component {

  // Close menu animation
  hideMenu() {
    $('#menu').velocity({
      left: '-265px'
    }, 300);
  }

  handleCloseMenuClick() {
    this.props.dispatch(closeMenu());
  }

  handleOpenMenuClick() {
    this.props.dispatch(hideFullScreenMessage());
    this.props.dispatch(openMenu());
  }

  // Open menu animation
  showMenu() {
    $('#menu').velocity({
      left: '0px'
    }, 300);
  }

  render() {

    // Show/Hide menu
    if (this.props.menuOpened) {
      this.showMenu();
    } else {
      this.hideMenu();
    }

    return (
      <div>
        <p className="openMenu" onClick={ () => this.handleOpenMenuClick() }>
          <img src="/img/menu.png" />
        </p>
        <div id="menu">
          <div 
            className="closeMenu"
            onClick={ () => this.handleCloseMenuClick() }
          >
            <p>Cerrar <img src="/img/close.png" /></p>
          </div>
          <p className="infoText">
            <strong>mapamallorca</strong> te permite conocer la historia de Palma a través de sus mapas y construcciones características a lo largo de su historia.
            Selecciona una época de la ciudad para compararla con la época actual o escoge puntos de interés de la ciudad,
            tanto actuales como de épocas pasadas. Para cualquier duda o sugerencia escribe un correo a <strong>contacto@mapamallorca.com</strong>
          </p>
          <h3>MAPAS</h3>
          <MapsMenuController mapSelected={ this.props.mapSelected } />
          <h3>PUNTOS DE INTERÉS</h3>
          <PoiMenuController poiSelected={ this.props.poiSelected } />
          <h3>EDIFICIOS MÁS ALTOS</h3>
          <TallBuildingsMenuController poiSelected={ this.props.poiSelected } />
        </div>
      </div>
    );
  }
}

// Connect class to redux
const mapStateToProps = (state) => {
  return {
    menuOpened : state.menuReducer.menuOpened,
    mapSelected: state.menuReducer.mapSelected,
    poiSelected: state.menuReducer.poiSelected
  };
};

export default connect(mapStateToProps)(MenuController);
