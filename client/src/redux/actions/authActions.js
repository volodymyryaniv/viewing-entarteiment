import types from '../consts.js';
import { registerUser,loginUser, getCurrentUser  } from '../../client-api/authUser-api';
import { manageToast } from '../../functions/manageToast.js';

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
    manageToast(dispatch,{
      status: 'success',
      message: `Welcome, ${user.data.user.name} user was created!`,
    })
    dispatch(succesAuthUser(user.data));
  } catch (err) {
    dispatch(failAuthUser(err.message));
    manageToast(dispatch,{
      status: 'error',
      message: err.response.data.message,
    })
  }
};

export const authUser = (userData) => async (dispatch) => {
  dispatch(startAuthUser());
  try {
    const user = await loginUser(userData);
    localStorage.setItem('accessToken', user.data.token);
    dispatch(succesAuthUser(user.data));
    manageToast(dispatch,{
      status: 'success',
      message: `Welcome ${user.data.user.name}!Have you good visit!`,
    })
  } catch (err) {
    dispatch(failAuthUser(err.response.data.message));
    manageToast(dispatch,{
      status: 'error',
      message: err.response.data.message,
    })
  }
};

export const getUser = () => async (dispatch) => {
  dispatch(startCurrentUser());
  try {
    const user = await getCurrentUser();
    dispatch(succesCurrentUser(user.data));
  } catch (err) {
    dispatch(failCurrentUser(err.response.data.message));
  }
};
