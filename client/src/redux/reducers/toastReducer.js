import types from '../consts.js';

export const toastReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.addToast: {
      return [
        ...state,
        {
          ...payload,
        },
      ];
    }
    case types.removeToast: {
      return state.filter((toast) => toast.id !== payload);
    }
    default:
      return state;
  }
};
