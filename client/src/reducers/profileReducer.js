import { FETCH_PROFILE, INIT_PROFILE, DELETE_PROFILE } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return action.payload;
    case INIT_PROFILE:
      return action.payload;
    case DELETE_PROFILE:
      return action.payload;
    default:
      return state;
  }
};
