import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showInfoMessage, hideInfoMessage} from '../../actions/appActions';
import { openMenu, closeMenu } from '../../actions/menuActions';
import MapsMenuController from './MapsMenuController';
import PoiMenuController from './PoiMenuController';
import TallBuildingsMenuController from './TallBuildingsMenuController';

/**
* Global menu
**/
class MenuController extends Component {

  handleCloseMenuClick() {
    this.props.dispatch(closeMenu());
    this.props.dispatch(hideInfoMessage());
  }

  handleOpenMenuClick() {
    this.props.dispatch(openMenu());
  }

  handleInfoMessageClick() {
    this.props.dispatch(showInfoMessage());
  }

  toggleMenu() {
    const position = (this.props.menuOpened ? '0px' : '-265px');
    $('#menu').velocity({
      left: position
    }, 300);
  }

  render() {

    // Show/Hide menu
    this.toggleMenu();

    // Info text
    let infoText;
    if (this.props.showInfoMessage) {
      infoText = (
        <p className="infoText">
          <strong>mapamallorca</strong> te permite conocer la historia de Palma a través de sus mapas y construcciones características a lo largo de su historia.
          Selecciona una época de la ciudad para compararla con la época actual o escoge puntos de interés de la ciudad,
          tanto actuales como de épocas pasadas. Para cualquier duda o sugerencia escribe un correo a <strong>contacto@mapamallorca.com</strong>
        </p>
      );
    } else {
      infoText = (
        <p className="infoTextHidden" onClick={ () => this.handleInfoMessageClick() }>
          <strong>mapamallorca</strong> te permite ...
        </p>
      );
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
          { infoText }
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
    showInfoMessage: state.appReducer.showInfoMessage,
    menuOpened     : state.menuReducer.menuOpened,
    mapSelected    : state.menuReducer.mapSelected,
    poiSelected    : state.menuReducer.poiSelected
  };
};

export default connect(mapStateToProps)(MenuController);
