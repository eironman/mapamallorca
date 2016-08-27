import { MAP_ACTIONS } from '../constants/actions';
import { arrayContains, removeFromArray } from '../helpers/arrayHelper';

/**
* Initial state of the map menu
**/
const mapInitialState = {
  mapInstance : null,
  yearSelected: null,
  poisSelected: []
};

/**
* Actions the user can perform to the map
**/
export function mapReducer(state = mapInitialState, action) {

  switch (action.type) {

    case MAP_ACTIONS.INIT_MAP:
      return Object.assign({}, state, {
        mapInstance: action.map
      });

    case MAP_ACTIONS.SELECT_YEAR:
      return Object.assign({}, state, {
        yearSelected: action.year
      });

    case MAP_ACTIONS.SELECT_POI:
      let newPoi;
      if (!arrayContains(state.poisSelected, action.poi)) {
        newPoi = state.poisSelected.slice();
        newPoi.push(action.poi);
      } else {
        newPoi = removeFromArray(state.poisSelected.slice(), action.poi);
      }

      return Object.assign({}, state, {
        poisSelected: newPoi
      });

    default:
      return state;
  }
}
