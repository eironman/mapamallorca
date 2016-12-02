import React from 'react';
import { POIS } from '../constants/constants';
import CityWall from '../components/map/pois/CityWall';
import CityRiver from '../components/map/pois/CityRiver';
import Bullfight from '../components/map/pois/Bullfight';
import Bullfight1865 from '../components/map/pois/Bullfight1865';
import WaterWindmill from '../components/map/pois/WaterWindmill';
import TorreForti from '../components/map/pois/tallestBuildings/TorreForti';
import Airport from '../components/map/pois/tallestBuildings/Airport';
import Cathedral from '../components/map/pois/tallestBuildings/Cathedral';
import TorreAsima from '../components/map/pois/tallestBuildings/TorreAsima';
import TorreHornabeque from '../components/map/pois/tallestBuildings/TorreHornabeque';
import SantanderBuilding from '../components/map/pois/tallestBuildings/SantanderBuilding';
import ComplejoPillari from '../components/map/pois/tallestBuildings/ComplejoPillari';
import TorresPortixol from '../components/map/pois/tallestBuildings/TorresPortixol';
import PuigAlaro from '../components/map/pois/tallestBuildings/PuigAlaro';
import GabrielRoca from '../components/map/pois/tallestBuildings/GabrielRoca';
import CreditoBalear from '../components/map/pois/tallestBuildings/CreditoBalear';
import TorreMallorca from '../components/map/pois/tallestBuildings/TorreMallorca';

export default class PoiFactory {

  getPoi(poiId, mapInstance)
  {
    let poi = null;

    if (poiId === POIS.CITY_WALL) {
      poi = (<CityWall mapInstance={ mapInstance }/>);
    }
    if (poiId === POIS.CITY_RIVER) {
      poi = (<CityRiver mapInstance={ mapInstance }/>);
    }
    if (poiId === POIS.BULLFIGHT) {
      poi = (<Bullfight mapInstance={ mapInstance }/>);
    }
    if (poiId === POIS.BULLFIGHT_1865) {
      poi = (<Bullfight1865 mapInstance={ mapInstance }/>);
    }
    if (poiId === POIS.WATER_WINDMILLS) {
      poi = (<WaterWindmill mapInstance={ mapInstance }/>);
    }
    if (poiId === POIS.TORRE_ES_FORTI) {
      poi = (<TorreForti mapInstance={ mapInstance }/>);
    }
    if (poiId === POIS.AIRPORT_SANT_JOAN) {
      poi = (<Airport mapInstance={ mapInstance }/>);
    }
    if (poiId === POIS.CATHEDRAL) {
      poi = (<Cathedral mapInstance={ mapInstance }/>);
    }
    if (poiId === POIS.TORRE_ASIMA) {
      poi = (<TorreAsima mapInstance={ mapInstance }/>);
    }
    if (poiId === POIS.TORRE_HORNABEQUE) {
      poi = (<TorreHornabeque mapInstance={ mapInstance }/>);
    }
    if (poiId === POIS.SANTANDER_BUILDING) {
      poi = (<SantanderBuilding mapInstance={ mapInstance }/>);
    }
    if (poiId === POIS.COMPLEJO_PILLARI) {
      poi = (<ComplejoPillari mapInstance={ mapInstance }/>);
    }
    if (poiId === POIS.TORRES_PORTIXOL) {
      poi = (<TorresPortixol mapInstance={ mapInstance }/>);
    }
    if (poiId === POIS.PUIG_ALARO) {
      poi = (<PuigAlaro mapInstance={ mapInstance }/>);
    }
    if (poiId === POIS.GABRIEL_ROCA) {
      poi = (<GabrielRoca mapInstance={ mapInstance }/>);
    }
    if (poiId === POIS.CREDITO_BALEAR) {
      poi = (<CreditoBalear mapInstance={ mapInstance }/>);
    }
    if (poiId === POIS.TORRE_MALLORCA) {
      poi = (<TorreMallorca mapInstance={ mapInstance }/>);
    }
    
    return poi;
  }
}
