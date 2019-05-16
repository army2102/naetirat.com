import axios from 'axios';

export const fetchProfile = () => async dispatch => {
  const response = await axios.get('/api/profile');

  dispatch({
    type: 'FETCH_PROFILE',
    payload: response.data[0]
  });
};
