import { actionTypes } from '../actions'; // actions/index.js
import successReducer from './successReducer';

test('returns default initial state of `false` when no action is passed', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false); // When first loading up, no guesses attempted so the correct one couldn't have been given yet.
});

test('returns state of true upon receiving an action of type `CORRECT_GUESS`', () => {
  // undefined is the initial state, which will use default as initial state.
  const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
  expect(newState).toBe(true);
});