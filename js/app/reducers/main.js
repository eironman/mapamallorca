import { combineReducers } from 'redux';
import { mapReducer } from './mapReducer';
import { menuReducer } from './menuReducer';
import { appReducer } from './appReducer';

export default combineReducers({
  mapReducer,
  menuReducer,
  appReducer
});
