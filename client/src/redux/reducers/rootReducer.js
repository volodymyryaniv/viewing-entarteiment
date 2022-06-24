import { combineReducers } from 'redux';
import { listReducer } from './listReducer.js';
import { itemReducer } from './itemReducer.js';
import { authReducer } from './authReducer.js';

const rootReducer = combineReducers({
  listReducer,
  itemReducer,
  authReducer
})

export default rootReducer;