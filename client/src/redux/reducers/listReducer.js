import types from '../consts.js';

const initialState = {
  storeList: {
    loading: false,
    list: [],
    error: null,
  }
}

export const listReducer = (state = initialState.storeList, {type,payload}) => {
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
};
