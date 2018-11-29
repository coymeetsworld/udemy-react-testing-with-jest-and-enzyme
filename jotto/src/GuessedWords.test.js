import React from 'react'; // Because we're using JSX
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3}],
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {objects} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});

// describe is Used to group tests
describe('if there are no words guessed', () => {

  let wrapper; //let the scope of wrapper be the whole describe (beforeEach() and test())
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] }); //overriding the default by specifying no guessed words.
  })

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0) 
  });
});

describe('if there are words guessed', () => {

  let wrapper; //let the scope of wrapper be the whole describe (beforeEach() and test())

  // We'll get more insight in our tests if we have multiple guesses, not just one.
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3},
    { guessedWord: 'agile', letterMatchCount: 1},
    { guessedWord: 'party', letterMatchCount: 5},
  ];

  beforeEach(() => {
    wrapper = setup({ guessedWords }); //overriding the default by specifying no guessed words.
  })

  test ('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders "guessed words" section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1);
  });

  test('correct number of guessed words', () => {
    // Not using the word table, and not requiring it to be in one in our tests. 
    // We're testing the specs are met, not the implementation detail.
  
    const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordsNodes.length).toBe(guessedWords.length);
  });
});