import { MAP_ACTIONS } from '../constants/actions';

export function initMap(map) {
  return {
    type: MAP_ACTIONS.INIT_MAP,
    map
  };
}
