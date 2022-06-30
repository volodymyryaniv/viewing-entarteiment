import types from '../consts.js';

export const showToast = (message) => {
  return {
    type: types.addToast,
    payload: message
  }
}

export const removeToast = (id) => {
  return {
    type: types.removeToast,
    payload: id
  }
}
