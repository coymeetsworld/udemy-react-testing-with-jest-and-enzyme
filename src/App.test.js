import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

// This says we're using the adapter for React 16
Enzyme.configure({ adapter: new EnzymeAdapter() });


/* class and id have their own uses in the app. 
  Developers may come and change it, thus ruining the tests.
  data-test is a made-up attribute used just for testing.
*/
test('renders without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = shallow(<App />);
  const button = wrapper.find("[data-test='increment-button']");
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = shallow(<App />);
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
});

// Testing 'display' over 'state' so that we're further away from implementation details.
// If we change implementation it'll break tests, even if functionally the app behaves the same.
test('clicking button increments counter display', () => {

});