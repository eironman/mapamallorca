import React, { Component, PropTypes } from 'react';
import Carousel from 'react-slick';
import CarouselSlide from './CarouselSlide';
import { CAROUSEL_CONFIG, POIS } from '../../../constants/constants';

/**
* Menu to select a tall building
**/
export default class TallestBuildingsCarousel extends Component {

  render() {
    return (
      <Carousel {...CAROUSEL_CONFIG}>
        <CarouselSlide
          onClick={ () => this.props.onClose() }
          selected={ true }
          src={'/img/buildings/menu_edificios.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.props.onPoiSelect(POIS.TORRE_ES_FORTI) }
          selected={ POIS.TORRE_ES_FORTI === this.props.poiSelected }
          src={'/img/buildings/torre_forti.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.props.onPoiSelect(POIS.AIRPORT_SANT_JOAN) }
          selected={ POIS.AIRPORT_SANT_JOAN === this.props.poiSelected }
          src={'/img/buildings/aeropuerto.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.props.onPoiSelect(POIS.CATHEDRAL) }
          selected={ POIS.CATHEDRAL === this.props.poiSelected }
          src={'/img/buildings/catedral.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.props.onPoiSelect(POIS.TORRE_ASIMA) }
          selected={ POIS.TORRE_ASIMA === this.props.poiSelected }
          src={'/img/buildings/torre_asima.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.props.onPoiSelect(POIS.TORRES_PORTIXOL) }
          selected={ POIS.TORRES_PORTIXOL === this.props.poiSelected }
          src={'/img/buildings/torres_portixol.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.props.onPoiSelect(POIS.PUIG_ALARO) }
          selected={ POIS.PUIG_ALARO === this.props.poiSelected }
          src={'/img/buildings/puig_alaro.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.props.onPoiSelect(POIS.GABRIEL_ROCA) }
          selected={ POIS.GABRIEL_ROCA === this.props.poiSelected }
          src={'/img/buildings/gabriel_roca.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.props.onPoiSelect(POIS.TORRE_HORNABEQUE) }
          selected={ POIS.TORRE_HORNABEQUE === this.props.poiSelected }
          src={'/img/buildings/torre_hornabeque.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.props.onPoiSelect(POIS.SANTANDER_BUILDING) }
          selected={ POIS.SANTANDER_BUILDING === this.props.poiSelected }
          src={'/img/buildings/santander.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.props.onPoiSelect(POIS.COMPLEJO_PILLARI) }
          selected={ POIS.COMPLEJO_PILLARI === this.props.poiSelected }
          src={'/img/buildings/pillari.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.props.onPoiSelect(POIS.CREDITO_BALEAR) }
          selected={ POIS.CREDITO_BALEAR === this.props.poiSelected }
          src={'/img/buildings/credito_balear.jpg'}
        />
        <CarouselSlide
          onClick={ () => this.props.onPoiSelect(POIS.TORRE_MALLORCA) }
          selected={ POIS.TORRE_MALLORCA === this.props.poiSelected }
          src={'/img/buildings/torre_mallorca.jpg'}
        />
      </Carousel>
    );
  }
}

TallestBuildingsCarousel.propTypes = {
  poiSelected: PropTypes.number,
  onPoiSelect: PropTypes.func.isRequired,
  onClose    : PropTypes.func.isRequired
}
