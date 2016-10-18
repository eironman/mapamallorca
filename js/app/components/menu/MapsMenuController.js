import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleMap, toggleMapsMenu } from '../../actions/menuActions';
import { hideFullScreenMessage } from '../../actions/appActions';
import Carousel from 'react-slick';
import MapCarousel from './carousels/MapCarousel';
import CarouselSlide from './carousels/CarouselSlide';

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
  handleToggleMenu() {
    this.props.dispatch(toggleMapsMenu());
  }

  render() {
    const carousel = (
      <MapCarousel
        mapSelected={ this.props.mapSelected }
        onMapSelect={ (map) => { this.handleMapSelect(map) } }
      />
    );

    return (
      <div>
        { this.props.showMapsMenu ? carousel : null }
        <div className="menuTag">
          <div
            className="menuTrigger"
            onClick={ () => this.handleToggleMenu() }
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
