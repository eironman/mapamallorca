import { MENU_ACTIONS } from '../constants/actions';
import { arrayContains, removeFromArray } from '../helpers/arrayHelper';

/**
* Initial state of the map menu
**/
const mapInitialState = {
  menuOpened : true,
  mapSelected: null,
  poiSelected: null
};

/**
* Actions the user can perform to the map
**/
export function menuReducer(state = mapInitialState, action) {

  let showMapsMenu;
  let showPoiMenu;

  switch (action.type) {

    case MENU_ACTIONS.OPEN_MENU:
      return Object.assign({}, state, {
        menuOpened: true
      });

    case MENU_ACTIONS.CLOSE_MENU:
      return Object.assign({}, state, {
        menuOpened: false
      });

    case MENU_ACTIONS.TOGGLE_MAP:
      let newMap = action.map;
      if (state.mapSelected === newMap) {
        newMap = null;
      }

      return Object.assign({}, state, {
        mapSelected: newMap
      });

    case MENU_ACTIONS.TOGGLE_POI:
      let newPoi = action.poi;
      if (state.poiSelected === newPoi) {
        newPoi = null;
      }

      return Object.assign({}, state, {
        poiSelected: newPoi
      });

    default:
      return state;
  }
}
