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
    $('#menu').animate({
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
    $('#menu').show().animate({
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
