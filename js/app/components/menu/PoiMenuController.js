import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePoi, togglePoiMenu } from '../../actions/menuActions';
import Carousel from 'react-slick';
import CarouselSlide from './CarouselSlide';
import { CAROUSEL_CONFIG, POIS } from '../../constants/constants';

/**
* Menu to select a poi
**/
class PoiMenuController extends Component {

  // Select a poi
  handlePoiSelect(poi) {
    this.props.dispatch(togglePoi(poi));
  }

  // Show/hide menu
  onTriggerClick() {
    this.props.dispatch(togglePoiMenu());
  }

  render() {
    const carousel = (
      <Carousel {...CAROUSEL_CONFIG}>
        <CarouselSlide
          onClick={ () => this.handleMapSelect(POIS.CITY_WALL) }
          slideId={ POIS.CITY_WALL }
          selectedId={ this.props.poiSelected }
          src={'/img/muralla.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.handleMapSelect(POIS.BULLFIGHT_1865) }
          slideId={ POIS.BULLFIGHT_1865 }
          selectedId={ this.props.poiSelected }
          src={'/img/plazatoros.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.handleMapSelect(POIS.BULLFIGHT) }
          slideId={ POIS.BULLFIGHT }
          selectedId={ this.props.poiSelected }
          src={'/img/coliseo.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.handleMapSelect(POIS.WATER_WINDMILLS) }
          slideId={ POIS.WATER_WINDMILLS }
          selectedId={ this.props.poiSelected }
          src={'/img/molinos.jpg'}
        />
      </Carousel>
    );

    return (
      <div>
        <div className="menuTag">
          <div
            className="menuTrigger"
            onClick={ () => this.onTriggerClick() }
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
