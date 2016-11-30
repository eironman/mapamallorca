import { APP_ACTIONS } from '../constants/actions';

export function hideInfoMessage() {
  return {
    type: APP_ACTIONS.HIDE_INFO_MESSAGE
  };
}

export function showInfoMessage() {
  return {
    type: APP_ACTIONS.SHOW_INFO_MESSAGE
  };
}
