export const PALMA_LAT = 39.570508;
export const PALMA_LNG = 2.648015;
export const CARTODB_USER = 'eironman';
export const CARTODB_SHAPE_TABLE = 'shape';
export const CARTODB_SPOT_TABLE = 'spot';

export const INFOWINDOW_TEMPLATE =
  '<div class="cartodb-popup header v2">' +
    '<a href="#close" class="cartodb-popup-close-button close">x</a>' +
    '<div class="cartodb-popup-header">' +
      '<h1>{{name}}</h1>' +
      '<span class="separator"></span>' +
    '</div>' +
    '<div class="cartodb-popup-content-wrapper">' +
      '<div class="cartodb-popup-content">' +
        '<p>{{description}}</p>' +
      '</div>' +
    '</div>' +
    '<div class="cartodb-popup-tip-container">' +
    '</div>' +
  '</div>';

// Points of interest
export const POIS = {
  CITY_WALL         : 0,
  BULLFIGHT         : 1,
  BULLFIGHT_1865    : 2,
  WATER_WINDMILLS   : 3,
  TORRE_ES_FORTI    : 4,
  AIRPORT_SANT_JOAN : 5,
  CATHEDRAL         : 6,
  TORRE_ASIMA       : 7,
  TORRE_HORNABEQUE  : 8,
  SANTANDER_BUILDING: 9,
  COMPLEJO_PILLARI  : 10,
  TORRES_PORTIXOL   : 11,
  PUIG_ALARO        : 12,
  GABRIEL_ROCA      : 13,
  CREDITO_BALEAR    : 14,
  TORRE_MALLORCA    : 15,
  CITY_RIVER        : 16,
};

// Maps
export const MAPS = {
  CIVITAS       : 0,
  DEFENSA_BAHIA : 1,
  ALCANTARA_PENA: 2,
  SAN_CARLOS    : 3
};

export const MAP_INITIAL_OPACITY = 0.9;

// Bounding box of the map selected
export const MAP_BB_COORDS = {
  // MAPS.CIVITAS
  0: {
    lat_ne: 39.5773216175,
    lng_ne: 2.657200098,
    lat_sw: 39.5639486812,
    lng_sw: 2.6370191574,
    zoom  : 16
  },
  // DEFENSA_BAHIA
  1: {
    lat_ne: 39.589223,
    lng_ne: 2.564834,
    lat_sw: 39.517762,
    lng_sw: 2.686047,
    zoom  : 14
  },
  // ALCANTARA_PENA
  2: {
    lat_ne: 39.5773216175,
    lng_ne: 2.657200098,
    lat_sw: 39.5639486812,
    lng_sw: 2.6370191574,
    zoom  : 16
  },
  // SAN_CARLOS
  3: {
    lat_ne: 39.549666,
    lng_ne: 2.620902,
    lat_sw: 39.544484,
    lng_sw: 2.626732,
    zoom  : 17
  }
};
