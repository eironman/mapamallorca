import React, { Component, PropTypes } from 'react';
import Carousel from 'react-slick';
import CarouselSlide from './CarouselSlide';
import { CAROUSEL_CONFIG, POIS } from '../../../constants/constants';

/**
* Menu to select a poi
**/
export default class GeneralPoiCarousel extends Component {

  render() {
    return (
      <Carousel {...CAROUSEL_CONFIG}>
        <CarouselSlide
          onClick={ () => this.props.onTallBuildingsSelect() }
          selected={ false }
          src={'/img/buildings/menu_edificios.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.props.onPoiSelect(POIS.CITY_WALL) }
          selected={ POIS.CITY_WALL === this.props.poiSelected }
          src={'/img/muralla.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.props.onPoiSelect(POIS.BULLFIGHT_1865) }
          selected={ POIS.BULLFIGHT_1865 === this.props.poiSelected }
          src={'/img/plazatoros.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.props.onPoiSelect(POIS.BULLFIGHT) }
          selected={ POIS.BULLFIGHT === this.props.poiSelected }
          src={'/img/coliseo.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.props.onPoiSelect(POIS.WATER_WINDMILLS) }
          selected={ POIS.WATER_WINDMILLS === this.props.poiSelected }
          src={'/img/molinos.jpg'}
        />
      </Carousel>
    );
  }
}

GeneralPoiCarousel.propTypes = {
  poiSelected          : PropTypes.number,
  onPoiSelect          : PropTypes.func.isRequired,
  onTallBuildingsSelect: PropTypes.func.isRequired,
}
