import axios from 'axios';
import {
  FETCH_PROFILE,
  INIT_PROFILE,
  DELETE_PROFILE,
  ERROR_MESSAGE,
  CLEAR_ERROR_MESSAGE
} from './types';

export const fetchProfile = () => async dispatch => {
  try {
    // TODO: Refactor this
    dispatch({
      type: CLEAR_ERROR_MESSAGE
    });

    const response = await axios.get('/api/profile');
    dispatch({
      type: FETCH_PROFILE,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: err.response
    });
  }
};

export const initProfile = () => async dispatch => {
  try {
    // TODO: Refactor this
    dispatch({
      type: CLEAR_ERROR_MESSAGE
    });

    const response = await axios.post('/api/profile/init');
    dispatch({
      type: INIT_PROFILE,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: err.response
    });
  }
};

export const deleteProfile = () => async dispatch => {
  try {
    // TODO: Refactor this
    dispatch({
      type: CLEAR_ERROR_MESSAGE
    });

    const response = await axios.delete('/api/profile/');
    dispatch({
      type: DELETE_PROFILE,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: err.response
    });
  }
};

export const clearErrorMessage = () => {
  return {
    type: CLEAR_ERROR_MESSAGE
  };
};
