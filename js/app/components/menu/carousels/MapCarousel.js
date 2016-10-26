import React, { Component, PropTypes } from 'react';
import Carousel from 'react-slick';
import CarouselSlide from './CarouselSlide';
import { MAPS, CAROUSEL_CONFIG, POIS } from '../../../constants/constants';

/**
* Menu to select a map
**/
export default class MapCarousel extends Component {

  render() {
    
    const config = Object.assign({}, CAROUSEL_CONFIG);
    config.infinite = false;
    config.arrows = false;

    return (
      <Carousel {...config}>
        <CarouselSlide
          onClick={ () => this.props.onMapSelect(MAPS.CIVITAS) }
          selected={ MAPS.CIVITAS === this.props.mapSelected }
          src={'/img/1644.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.props.onMapSelect(MAPS.DEFENSA_BAHIA) }
          selected={ MAPS.DEFENSA_BAHIA === this.props.mapSelected }
          src={'/img/1860.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.props.onMapSelect(MAPS.ALCANTARA_PENA) }
          selected={ MAPS.ALCANTARA_PENA === this.props.mapSelected }
          src={'/img/1869.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.props.onMapSelect(MAPS.SAN_CARLOS) }
          selected={ MAPS.SAN_CARLOS === this.props.mapSelected }
          src={'/img/san_carlos.jpg'}
        />
      </Carousel>
    );
  }
}

MapCarousel.propTypes = {
  mapSelected: PropTypes.number,
  onMapSelect: PropTypes.func.isRequired
}
