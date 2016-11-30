import { APP_ACTIONS } from '../constants/actions';

/**
* Initial state of the app
**/
const appInitialState = {
  showInfoMessage: true
};

/**
* Actions the user can perform to the app
**/
export function appReducer(state = appInitialState, action) {

  switch (action.type) {

    case APP_ACTIONS.HIDE_INFO_MESSAGE:
      return Object.assign({}, state, {
        showInfoMessage: false
      });

    case APP_ACTIONS.SHOW_INFO_MESSAGE:
      return Object.assign({}, state, {
        showInfoMessage: true
      });

    default:
      return state;
  }
}
