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
        '<p><pre>{{description}}</pre></p>' +
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
  TORRE_MALLORCA    : 15
};

// Bounding box of the map correspondig to the year selected
export const YEAR_BB_COORDS = {
  1644: {
    lat_ne: 39.5773216175,
    lng_ne: 2.657200098,
    lat_sw: 39.5639486812,
    lng_sw: 2.6370191574
  },
  1869: {
    lat_ne: 39.5773216175,
    lng_ne: 2.657200098,
    lat_sw: 39.5639486812,
    lng_sw: 2.6370191574
  },
  1860: {
    lat_ne: 39.589223,
    lng_ne: 2.564834,
    lat_sw: 39.517762,
    lng_sw: 2.686047
  }
};
