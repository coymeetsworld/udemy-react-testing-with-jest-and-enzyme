import { actionTypes } from '../actions';

/**
 * @function secretWordReducer
 * @param {string} state - State before reducer.
 * @param {object} action - Action sent to reducer.
 * @returns {string} - New state (secret word payload from action).
 */
export default (state=null, action) => {

  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      // returning state instead of null because this will be called every time an action is dispatched.
      // we don't want to null out the secretWord state every time we run an action.
      return state;
  }

}
