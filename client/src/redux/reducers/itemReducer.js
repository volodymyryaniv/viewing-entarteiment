import types from '../consts.js';

const initialState = {
  oneElement: {
    loading: false,
    element: [],
    error: null,
  }
}

export const itemReducer = (state = initialState.oneElement, {type,payload}) => {
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
};
