import types from '../consts.js';

const initialState = {
  user: {
    name: '',
    email: '',
    roles: [],
  },
  token: null,
  error: null,
  loading: false,
}

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.getStarUser: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.getSuccessUser: {
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        loading: false,
        error: null,
      };
    }
    case types.getFailUser: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    case types.resetToken: {
      return initialState;
    }
    default:
      return state;
  }
};
