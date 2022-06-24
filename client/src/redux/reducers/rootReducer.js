import { combineReducers } from 'redux';
import { listReducer } from './listReducer.js';
import { itemReducer } from './itemReducer.js'

const rootReducer = combineReducers({
  listReducer,
  itemReducer
})

export default rootReducer;