import {getBooks,getBookById} from '../../client-api/bookStore-api.js';
import types from '../consts.js';

const startAllBooksAction = () => {
  return {
    type: types.getStarAll
  }
}

const successAllBooksAction = (data) => {
  return {
    type: types.getSuccessAll,
    payload: data
  }
}
const failAllBooksAction = (error) => {
  return {
    type: types.getFailAll,
    payload: {
        error
    }
  }
}

const startOneBookAction = () => {
  return {
    type: types.getStarOne
  }
}

const successOneBookAction = (data) => {
  return {
    type: types.getSuccessOne,
    payload: data
  }
}
const failOneBookAction = (error) => {
  return {
    type: types.getFailOne,
    payload: {
        error
    }
  }
}

export const fetchAllBookStores = () => async dispatch => {
  dispatch(startAllBooksAction())
  try {
    const list = await getBooks()
    dispatch(successAllBooksAction(list.data))
  } catch (error) {
    dispatch(failAllBooksAction(error))
  }
}

export const fetchOneBookStores = (id) => async dispatch => {
  dispatch(startOneBookAction())
  try {
    const list = await getBookById(id)
    dispatch(successOneBookAction(list.data))
  } catch (error) {
    dispatch(failOneBookAction(error))
  }
}
