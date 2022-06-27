import types from '../consts.js';
import { registerUser,loginUser  } from '../../client-api/authUser-api';

const getStartUser = () => {
  return {
    type: types.getStarUser
  }
}

const getSuccessUser = (payload) => {
  return {
    type: types.getSuccessUser,
    payload: payload
  }
}

const getFailUser = (error) => {
  return {
    type: types.getFailUser,
    payload: error
  }
}

export const resetToken = () => {
  return {
    type: types.resetToken
  }
}

export const addNewUser = (userData) => async (dispatch) => {
  dispatch(getStartUser());
  try {
    const user = await registerUser(userData);
    dispatch(getSuccessUser(user.data));
  } catch (err) {
    dispatch(getFailUser(err.message));
  }
}

export const authUser = (userData) => async (dispatch) => {
  dispatch(getStartUser());
  try {
    const user = await loginUser(userData);
    dispatch(getSuccessUser(user.data));
  } catch (err) {
    dispatch(getFailUser(err.response.data.message));
  }
}
