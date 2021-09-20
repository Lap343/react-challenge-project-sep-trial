import { combineReducers } from 'redux';
import editReducer from './editReducer';
import authReducer from './authReducer';

export default combineReducers({
  edit: editReducer,
  auth: authReducer,
});