import {getBooks,getBookById} from '../../client-api/bookStore-api.js';
import types from '../consts.js';

const startAllItemsAction = () => {
  return {
    type: types.getStarAll
  }
}

const successAllItemsAction = (data) => {
  return {
    type: types.getSuccessAll,
    payload: data
  }
}
const failAllItemsAction = (error) => {
  return {
    type: types.getFailAll,
    payload: {
        error
    }
  }
}

const startOneItemAction = () => {
  return {
    type: types.getStarOne
  }
}

const successOneItemAction = (data) => {
  return {
    type: types.getSuccessOne,
    payload: data
  }
}
const failOneItemAction = (error) => {
  return {
    type: types.getFailOne,
    payload: {
        error
    }
  }
}

export const fetchOneItemStores = (id, path) => async dispatch => {
  dispatch(startOneItemAction())
  try {
    const list = await getBookById(id, path)
    dispatch(successOneItemAction(list.data))
  } catch (error) {
    dispatch(failOneItemAction(error))
  }
}


export const fetchAllItems = (path) => async dispatch => {
  dispatch(startAllItemsAction())
  try {
    const list = await getBooks(path);
    dispatch(successAllItemsAction(list.data))
  } catch (error) {
    dispatch(failAllItemsAction(error))
  }
}