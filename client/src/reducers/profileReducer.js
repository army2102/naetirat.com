import {
  FETCH_PROFILE,
  INIT_PROFILE,
  DELETE_PROFILE,
  CLEAR_PROFILE_MESSAGE
} from '../actions/types';

const initialState = {
  profile: {},
  message: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return action.payload;
    case INIT_PROFILE:
      return action.payload;
    case DELETE_PROFILE:
      return action.payload;
    case CLEAR_PROFILE_MESSAGE:
      return { ...state, message: '' };
    default:
      return state;
  }
};
