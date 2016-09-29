import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePoi, togglePoiMenu } from '../../actions/menuActions';
import Carousel from 'react-slick';
import { SLIDER_CONFIG, POIS } from '../../constants/constants';

/**
* Menu to select a poi
**/
class PoiMenuController extends Component {

  handlePoiSelect(poi) {
    this.props.dispatch(togglePoi(poi));
  }

  onTriggerClick() {
    this.props.dispatch(togglePoiMenu());
  }

  // Calculate position based on window height
  repositionMenu() {
    const position = $(window).height() - $("#poiMenu").height();
    $("#poiMenu").css({ 'top': position });
  }

  componentDidUpdate() {
    this.repositionMenu();
  }

  componentDidMount() {
    this.repositionMenu();
  }

  render() {
    const carousel = (
      <Carousel {...SLIDER_CONFIG}>
        <div onClick={ () => this.handlePoiSelect(POIS.CITY_WALL) }>
          <img src="/img/muralla.jpg" />
        </div>
        <div onClick={ () => this.handlePoiSelect(POIS.BULLFIGHT_1865) }>
          <img src="/img/plazatoros.jpg" />
        </div>
        <div onClick={ () => this.handlePoiSelect(POIS.BULLFIGHT) }>
          <img src="/img/coliseo.jpg" />
        </div>
        <div onClick={ () => this.handlePoiSelect(POIS.WATER_WINDMILLS) }>
          <img src="/img/molinos.jpg" />
        </div>
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
