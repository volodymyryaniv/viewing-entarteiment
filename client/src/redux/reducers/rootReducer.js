import { combineReducers } from 'redux';
import { listReducer } from './listReducer.js';
import { itemReducer } from './itemReducer.js';
import { authReducer } from './authReducer.js';
import { toastReducer } from './toastReducer.js';

const rootReducer = combineReducers({
  listReducer,
  itemReducer,
  authReducer,
  toastReducer
})

export default rootReducer;