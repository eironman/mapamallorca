import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePoi, togglePoiMenu } from '../../actions/menuActions';
import { hideFullScreenMessage } from '../../actions/appActions';
import Carousel from 'react-slick';
import TallestBuildingsCarousel from './carousels/TallestBuildingsCarousel';
import GeneralPoiCarousel from './carousels/GeneralPoiCarousel';
import CarouselSlide from './carousels/CarouselSlide';
import { CAROUSEL_CONFIG, POIS } from '../../constants/constants';

/**
* Menu to select a poi
**/
class PoiMenuController extends Component {

  constructor()
  {
    super();
    this.state = { showBuildingsMenu: false }
  }

  handleCloseBuildingsMenu()
  {
    this.setState({ showBuildingsMenu: false });
  }

  handleOpenBuildingsMenu()
  {
    this.setState({ showBuildingsMenu: true });
  }

  // Select a poi
  handlePoiSelect(poi)
  {
    this.props.dispatch(togglePoi(poi));
    this.props.dispatch(hideFullScreenMessage());
  }

  // Show/hide menu
  handleToggleMenu() {
    this.props.dispatch(togglePoiMenu());
  }

  render() {
    
    let carousel;
    if (this.state.showBuildingsMenu) {

      carousel = (
        <TallestBuildingsCarousel
          poiSelected={ this.props.poiSelected }
          onPoiSelect={ (poi) => { this.handlePoiSelect(poi) } }
          onClose={ () => { this.handleCloseBuildingsMenu() } }
        />
      );

    } else {

      carousel = (
        <GeneralPoiCarousel
          poiSelected={ this.props.poiSelected }
          onPoiSelect={ (poi) => { this.handlePoiSelect(poi) } }
          onTallBuildingsSelect={ () => { this.handleOpenBuildingsMenu() } }
        />
      );
    }

    return (
      <div>
        <div className="menuTag">
          <div
            className="menuTrigger"
            onClick={ () => this.handleToggleMenu() }
          >
            PUNTOS DE INTERÉS
          </div>
        </div>
        { this.props.showPoiMenu ? carousel : null }
      </div>
    );
  }
}

// Connect class to redux
const mapStateToProps = (state) => {
  return {
    poiSelected: state.menuReducer.poiSelected,
    showPoiMenu: state.menuReducer.showPoiMenu
  };
};

export default connect(mapStateToProps)(PoiMenuController);
