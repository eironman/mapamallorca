import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleMap, toggleMapsMenu } from '../../actions/menuActions';
import { hideFullScreenMessage } from '../../actions/appActions';
import Carousel from 'react-slick';
import CarouselSlide from './CarouselSlide';
import { MAPS, CAROUSEL_CONFIG } from '../../constants/constants';

/**
* Menu to select a map
**/
class MapsMenuController extends Component {

  // Select a map
  handleMapSelect(map) {
    this.props.dispatch(toggleMap(map));
    this.props.dispatch(hideFullScreenMessage());
  }

  // Show/hide menu
  onTriggerClick() {
    this.props.dispatch(toggleMapsMenu());
  }

  render() {
    const carousel = (
      <Carousel {...CAROUSEL_CONFIG}>
        <CarouselSlide
          onClick={ () => this.handleMapSelect(MAPS.CIVITAS) }
          selected={ MAPS.CIVITAS === this.props.mapSelected }
          src={'/img/1644.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.handleMapSelect(MAPS.DEFENSA_BAHIA) }
          selected={ MAPS.DEFENSA_BAHIA === this.props.mapSelected }
          src={'/img/1860.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.handleMapSelect(MAPS.ALCANTARA_PENA) }
          selected={ MAPS.ALCANTARA_PENA === this.props.mapSelected }
          src={'/img/1869.jpg'}
        />
      </Carousel>
    );

    return (
      <div>
        { this.props.showMapsMenu ? carousel : null }
        <div className="menuTag">
          <div
            className="menuTrigger"
            onClick={ () => this.onTriggerClick() }
          >
            MAPAS
          </div>
        </div>
      </div>
    );
  }
}

// Connect class to redux
const mapStateToProps = (state) => {
  return {
    mapSelected : state.menuReducer.mapSelected,
    showMapsMenu: state.menuReducer.showMapsMenu
  };
};

export default connect(mapStateToProps)(MapsMenuController);
