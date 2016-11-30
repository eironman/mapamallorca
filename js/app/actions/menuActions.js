import { MENU_ACTIONS } from '../constants/actions';

/**
 * The user opens the menu
 */
export function openMenu() {
  return {
    type: MENU_ACTIONS.OPEN_MENU
  };
}

/**
 * The user closes the menu
 */
export function closeMenu() {
  return {
    type: MENU_ACTIONS.CLOSE_MENU
  };
}

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
