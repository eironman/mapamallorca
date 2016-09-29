import { MENU_ACTIONS } from '../constants/actions';
import { arrayContains, removeFromArray } from '../helpers/arrayHelper';

/**
* Initial state of the map menu
**/
const mapInitialState = {
  mapSelected : null,
  poiSelected : null,
  showMapsMenu: true,
  showPoiMenu : true
};

/**
* Actions the user can perform to the map
**/
export function menuReducer(state = mapInitialState, action) {

  switch (action.type) {

    case MENU_ACTIONS.TOGGLE_MAPS_MENU:
      return Object.assign({}, state, {
        showMapsMenu: !state.showMapsMenu
      });

    case MENU_ACTIONS.TOGGLE_POI_MENU:
      return Object.assign({}, state, {
        showPoiMenu: !state.showPoiMenu
      });

    case MENU_ACTIONS.SELECT_MAP:
      return Object.assign({}, state, {
        mapSelected : action.map,
        showMapsMenu: false,
        showPoiMenu : false
      });

    case MENU_ACTIONS.TOGGLE_POI:
      let newPoi = action.poi;
      let showMapsMenu = false;
      let showPoiMenu = false;
      if (state.poiSelected === newPoi) {
        newPoi = null;
        showMapsMenu = state.showMapsMenu;
        showPoiMenu = true;
      }
      return Object.assign({}, state, {
        poiSelected: newPoi,
        showMapsMenu,
        showPoiMenu
      });

    default:
      return state;
  }
}
