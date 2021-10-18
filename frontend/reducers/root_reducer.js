import { RECEIVE_USER } from '../actions/user_actions';

const rootReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.userId]: action.User });
    default:
      return state;
  }
};

export default rootReducer;
