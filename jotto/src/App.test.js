import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../test/testUtils';
import App, { UnconnectedApp } from './App';

/**
 * @function setup
 * @param {object} state - State for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (state={}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive();
  return wrapper;
}

describe('redux properties', () => {
  test('has access to `success` state', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('has access to `secretWord` state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test('has access to `guessedWords` state', () => {
    const guessedWords = [ { guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });
  test('`getSecretWord` action creator is a function of the props', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

test('`getSecretWord` runs on App mount', () => {
  const getSecretWordMock = jest.fn(); // Mock function that Jest will watch when its called, and how.

  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: []
  }

  // set up app component with getSecretWordMock as the getSecretWord prop
  // the real app gets getSecretWord from Redux, but our unconnected component will get it as an explicitly passed prop.

  // setup function uses our connected app, so we're not using that.
  const wrapper = shallow(<UnconnectedApp {...props} />);

  // run lifecycle method.
  // wrapper.instance gives us the actual React component
  wrapper.instance().componentDidMount(); // will run the lifecycle method

  // check to see if mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

  expect(getSecretWordCallCount).toBe(1);

  
});