import { MENU_ACTIONS } from '../constants/actions';

/**
 * The user selects a map
 * @param  {int} map
 */
export function toggleMap(map) {
  return {
    type: MENU_ACTIONS.TOGGLE_MAP,
    map
  };
}

/**
 * The user selects a poi
 * @param  {string} poi
 */
export function togglePoi(poi) {
  return {
    type: MENU_ACTIONS.TOGGLE_POI,
    poi
  };
}

/**
 * The user selects the maps menu
 */
export function toggleMapsMenu() {
  return {
    type: MENU_ACTIONS.TOGGLE_MAPS_MENU
  };
}
/**
 * The user selects the poi menu
 */
export function togglePoiMenu() {
  return {
    type: MENU_ACTIONS.TOGGLE_POI_MENU
  };
}
