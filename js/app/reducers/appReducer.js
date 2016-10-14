import { APP_ACTIONS } from '../constants/actions';

/**
* Initial state of the app
**/
const appInitialState = {
  showFullScreenMessage: true
};

/**
* Actions the user can perform to the app
**/
export function appReducer(state = appInitialState, action) {

  switch (action.type) {

    case APP_ACTIONS.HIDE_FULL_SCREEN_MESSAGE:
      return Object.assign({}, state, {
        showFullScreenMessage: false
      });

    default:
      return state;
  }
}
