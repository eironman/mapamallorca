import { MAP_ACTIONS } from '../constants/actions';
import { arrayContains, removeFromArray } from '../helpers/arrayHelper';

/**
* Initial state of the map menu
**/
const mapInitialState = {
  mapInstance: null
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

    default:
      return state;
  }
}
