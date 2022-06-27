import types from '../consts.js';
import { registerUser,loginUser, getCurrentUser  } from '../../client-api/authUser-api';

const startAuthUser = () => {
  return {
    type: types.getStarUser
  }
}

const succesAuthUser = (payload) => {
  return {
    type: types.succesAuthUser,
    payload: payload
  }
}

const failAuthUser = (error) => {
  return {
    type: types.failAuthUser,
    payload: error
  }
}

const startCurrentUser = () => {
  return {
    type: types.startCurrentUser
  }
}

const succesCurrentUser = (payload) => {
  return {
    type: types.successCurrentUser,
    payload: payload
  }
}

const failCurrentUser = (error) => {
  return {
    type: types.failCurrentUser,
    payload: error
  }
}

export const resetToken = () => {
  return {
    type: types.resetToken
  }
}

export const addNewUser = (userData) => async (dispatch) => {
  dispatch(startAuthUser());
  try {
    const user = await registerUser(userData);
    localStorage.setItem('accessToken', user.data.token);
    dispatch(succesAuthUser(user.data));
  } catch (err) {
    dispatch(failAuthUser(err.message));
  }
};

export const authUser = (userData) => async (dispatch) => {
  dispatch(startAuthUser());
  try {
    const user = await loginUser(userData);
    localStorage.setItem('accessToken', user.data.token);
    dispatch(succesAuthUser(user.data));
  } catch (err) {
    dispatch(failAuthUser(err.response.data.message));
  }
};

export const getUser = () => async (dispatch) => {
  dispatch(startCurrentUser());
  const token = localStorage.getItem('accessToken');
  try {
    const user = await getCurrentUser(token);
    dispatch(succesCurrentUser(user.data));
  } catch (err) {
    dispatch(failCurrentUser(err.response.data.message));
  }
};
