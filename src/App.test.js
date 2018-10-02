import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

// This says we're using the adapter for React 16
Enzyme.configure({ adapter: new EnzymeAdapter() });


/**
 * Factory function to create ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {any} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
  return shallow(<App {...props} />)
}


/**
 * Return ShallowWraper containing node(s) with the given data-test value. 
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {String} val - Value of data-test attribute for search.
 * @return {ShallowWrapper}
 */
const findByTestAddr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}


/* class and id have their own uses in the app. 
  Developers may come and change it, thus ruining the tests.
  data-test is a made-up attribute used just for testing.
*/
test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAddr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAddr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAddr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
});

// Testing 'display' over 'state' so that we're further away from implementation details.
// If we change implementation it'll break tests, even if functionally the app behaves the same.
test('clicking button increments counter display', () => {

});