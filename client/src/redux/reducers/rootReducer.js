import {combineReducers} from 'redux';
import {bookStoresAllReducer,bookStoresOneReducer} from './bookStoreReducers.js'

const rootReducer = combineReducers({
  bookStoresAllReducer,
  bookStoresOneReducer
})

export default rootReducer;