import React from 'react';
import { POIS } from '../constants/constants';
import CityWall from '../components/map/pois/CityWall';
import Bullfight from '../components/map/pois/Bullfight';
import Bullfight1865 from '../components/map/pois/Bullfight1865';
import TorreForti from '../components/map/pois/TorreForti';
import WaterWindmill from '../components/map/pois/WaterWindmill';

export default class PoiFactory {

  getPoi(poiId, mapInstance)
  {
    let poi = null;

    // City wall
    if (poiId === POIS.CITY_WALL) {
      poi = (<CityWall mapInstance={ mapInstance }/>);
    }

    // Bullfight
    if (poiId === POIS.BULLFIGHT) {
      poi = (<Bullfight mapInstance={ mapInstance }/>);
    }

    // Bullfight 1865
    if (poiId === POIS.BULLFIGHT_1865) {
      poi = (<Bullfight1865 mapInstance={ mapInstance }/>);
    }

    // Torre Forti
    if (poiId === POIS.TORRE_ES_FORTI) {
      poi = (<TorreForti mapInstance={ mapInstance }/>);
    }

    // Water Windmill
    if (poiId === POIS.WATER_WINDMILLS) {
      poi = (<WaterWindmill mapInstance={ mapInstance }/>);
    }
    
    return poi;
  }
}
