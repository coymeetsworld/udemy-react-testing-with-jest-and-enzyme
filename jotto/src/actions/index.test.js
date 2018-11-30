import { correctGuess, actionTypes } from './'; // ./ means index.js

describe('correctGuess', () => {
  test('returns an action with type `CORRECT_GUESS`', () => {
    const action = correctGuess();

    // toEqual compares contents, which you need for objects.
    //  2 objects that look the same do not strictly equal (===)
    // toEqual is a deep equal. Will compare top level and recursively downward.
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});