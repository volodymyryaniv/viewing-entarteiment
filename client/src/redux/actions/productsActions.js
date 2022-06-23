import { getList,getItemById } from '../../client-api/getData-api.js';
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

export const successOneItemAction = (data) => {
  return {
    type: types.getSuccessOne,
    payload: {
      ...data,
      rating: data.rating.toFixed(1),
    },
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

export const fetchOneItemStores = (func, pathWithId, value) => async (dispatch) => {
  dispatch(startOneItemAction())
  try {
    const list = await func(pathWithId, value)
    dispatch(successOneItemAction(list.data))
  } catch (error) {
    dispatch(failOneItemAction(error))
  }
}


export const fetchAllItems = (path) => async (dispatch) => {
  dispatch(startAllItemsAction())
  try {
    const list = await getList(path);
    dispatch(successAllItemsAction(list.data))
  } catch (error) {
    dispatch(failAllItemsAction(error))
  }
}