import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePoi, togglePoiMenu } from '../../actions/menuActions';
import { hideFullScreenMessage } from '../../actions/appActions';
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
    this.props.dispatch(hideFullScreenMessage());
  }

  // Show/hide menu
  onTriggerClick() {
    this.props.dispatch(togglePoiMenu());
  }

  render() {
    const carousel = (
      <Carousel {...CAROUSEL_CONFIG}>
        <CarouselSlide
          onClick={ () => this.handlePoiSelect(POIS.CITY_WALL) }
          selected={ POIS.CITY_WALL === this.props.poiSelected }
          src={'/img/muralla.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.handlePoiSelect(POIS.BULLFIGHT_1865) }
          selected={ POIS.BULLFIGHT_1865 === this.props.poiSelected }
          src={'/img/plazatoros.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.handlePoiSelect(POIS.BULLFIGHT) }
          selected={ POIS.BULLFIGHT === this.props.poiSelected }
          src={'/img/coliseo.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.handlePoiSelect(POIS.WATER_WINDMILLS) }
          selected={ POIS.WATER_WINDMILLS === this.props.poiSelected }
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
