import { combineReducers } from 'redux';
import { mapReducer } from './mapReducer';
import { menuReducer } from './menuReducer';

export default combineReducers({
  mapReducer,
  menuReducer
});
