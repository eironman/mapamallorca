import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMap, toggleMapsMenu } from '../../actions/menuActions';
import Carousel from 'react-slick';
import { SLIDER_CONFIG } from '../../constants/constants';

/**
* Menu to select a map
**/
class MapsMenuController extends Component {

  // Select a map
  handleMapSelect(year) {
    this.props.dispatch(selectMap(year));
  }

  // Show/hide menu
  onTriggerClick() {
    this.props.dispatch(toggleMapsMenu());
  }

  render() {
    const carousel = (
      <Carousel {...SLIDER_CONFIG}>
        <div onClick={ () => this.handleMapSelect(1644) }><img src="/img/1644.jpg" /></div>
        <div onClick={ () => this.handleMapSelect(1860) }><img src="/img/1860.jpg" /></div>
        <div onClick={ () => this.handleMapSelect(1869) }><img src="/img/1869.jpg" /></div>
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
    yearSelected: state.menuReducer.yearSelected,
    showMapsMenu: state.menuReducer.showMapsMenu
  };
};

export default connect(mapStateToProps)(MapsMenuController);
