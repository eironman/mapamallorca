import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapsMenuController from './MapsMenuController';
import PoiMenuController from './PoiMenuController';
import TallBuildingsMenuController from './TallBuildingsMenuController';

/**
* Global menu
**/
class MenuController extends Component {

  handleCloseMenu() {
    $('#menu').animate({
      left: '-265px'
    }, 300);
  }

  handleOpenMenu() {
    $('#menu').show().animate({
      left: '0px'
    }, 300);
  }

  render() {
    return (
      <div>
        <p className="openMenu" onClick={ () => this.handleOpenMenu() }>
          <img src="/img/menu.png" />
        </p>
        <div id="menu">
          <div 
            className="closeMenu"
            onClick={ () => this.handleCloseMenu() }
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
    mapSelected: state.menuReducer.mapSelected,
    poiSelected: state.menuReducer.poiSelected
  };
};

export default connect(mapStateToProps)(MenuController);
