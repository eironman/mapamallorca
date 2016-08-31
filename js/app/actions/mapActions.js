import { MAP_ACTIONS } from '../constants/actions';

export function initMap(map) {
  return {
    type: MAP_ACTIONS.INIT_MAP,
    map
  };
}

/**
 * The user selects a year
 * @param  {int} year
 */
export function selectYear(year) {
  return {
    type: MAP_ACTIONS.SELECT_YEAR,
    year
  };
}

/**
 * The user selects a poi
 * @param  {string} poi
 */
export function togglePoi(poi) {
  return {
    type: MAP_ACTIONS.TOGGLE_POI,
    poi
  };
}
