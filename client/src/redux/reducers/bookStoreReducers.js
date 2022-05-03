import types from '../consts.js';

const initialState = {
  bookStoreList: {
    storeList: {
      loading: false,
      list: [],
      error: null,
    },
    oneElement: {
      loading: false,
      element: [],
      error: null,
    }
  },
}

const bookStoresAllReducer = (state = initialState.bookStoreList.storeList, {type,payload}) => {
  switch (type) {
    case types.getStarAll:
      return {
        ...state,
        loading: true
      }
    case types.getSuccessAll:
      return {
        ...state,
        list: payload,
        loading: false
      }
    case types.getFailureAll:
      return {
        ...state,
        list: payload,
        error: payload.error
      }
    default:
      return state;
  }
}
const bookStoresOneReducer = (state = initialState.bookStoreList.oneElement, {type,payload}) => {
  switch (type) {
    case types.getStarOne:
      return {
        ...state,
        loading: true
      }
    case types.getSuccessOne:
      return {
        ...state,
        element: payload,
        loading: false
      }
    case types.getFailOne:
      return {
        ...state,
        loading: false,
        error: payload.error
      }
    default:
      return state;
  }
}

export {
  bookStoresAllReducer,
  bookStoresOneReducer
};
