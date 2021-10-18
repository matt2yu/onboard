import { RECEIVE_USER } from '../actions/user_actions';
import { combineReducers } from 'redux';

const rootReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      const user = action.user
      return Object.assign({}, {[user.id]: user});
    default:
      return state;
  }
};

export default rootReducer;
