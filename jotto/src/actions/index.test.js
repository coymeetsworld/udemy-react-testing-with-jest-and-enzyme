import moxios from 'moxios';

import { storeFactory } from '../../test/testUtils';
import { getSecretWord } from './';

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  //More of an integration test since it requires action creator and reducer to add the response word to the state.
  //The action creator will retreive the word
  //The reducer will add it to the state
  //Could do it separately like the success reducer, but integrated here
  // will require less test rewrites on refactoring most likely.
  test('adds response word to state', () => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      // This is what our response would be if we contacted the server.
      request.respondWith({
        status: 200,
        response: secretWord,
      });

    });

    // This will return a promise
    return store.dispatch(getSecretWord())
      .then(() => {
        const newState = store.getState();        
        expect(newState.secretWord).toBe(secretWord);
      });

  });
});