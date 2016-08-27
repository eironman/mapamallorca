import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayContains } from '../..//helpers/arrayHelper';
import { POIS, CARTODB_USER } from '../../constants/constants';
import CityWall from './pois/CityWall';
import Bullfight from './pois/Bullfight';
import TallestBuilding from './pois/TallestBuilding';
import Windmill from './pois/Windmill';

/**
* Displays in the map the points of interest selected
**/
class PoiLayer extends Component {

  render()
  {
    const pois = [];

    // City wall
    if (arrayContains(this.props.poisSelected, POIS.CITY_WALL)) {
      pois.push(
        <CityWall
          key={ POIS.CITY_WALL }
          mapInstance={ this.props.mapInstance }
        />
      );
    }

    // Bullfight
    if (arrayContains(this.props.poisSelected, POIS.BULLFIGHT)) {
      pois.push(
        <Bullfight
          key={ POIS.BULLFIGHT }
          mapInstance={ this.props.mapInstance }
        />
      );
    }

    // Tallest building
    if (arrayContains(this.props.poisSelected, POIS.TALLEST_BUILDING)) {
      pois.push(
        <TallestBuilding
          key={ POIS.TALLEST_BUILDING }
          mapInstance={ this.props.mapInstance }
        />
      );
    }

    // Windmill
    if (arrayContains(this.props.poisSelected, POIS.WINDMILLS)) {
      pois.push(
        <Windmill
          key={ POIS.WINDMILLS }
          mapInstance={ this.props.mapInstance }
        />
      );
    }
    
    if (pois.length > 0) {
      return (<div>{ pois }</div>);
    }
    return null;
  }
}

// Connect class to redux
const mapStateToProps = (state) => {
  return {
    mapInstance : state.mapReducer.mapInstance,
    poisSelected: state.mapReducer.poisSelected
  };
};

export default connect(mapStateToProps)(PoiLayer);