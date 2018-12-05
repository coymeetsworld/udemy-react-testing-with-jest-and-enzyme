import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';

import Input from './Input';


/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} initialState - Initial state for this setup.
 * @returns {ShallowWrapper}
*/
const setup = (initialState={}) => {

	//redux-mock-store can test intermediate actions (such as loading, waiting for AJAX)
	// mocks are always one step removed, actual store is closer to the app.
	// also can't test changes to state, just the actions.
	const store = storeFactory(initialState)

	// Dive method returns the non-dom (the React child component) of the shallow wrapper.
	const wrapper = shallow(<Input store={store}/>).dive();
	// w/o dive, it was only looking at the placeholder for the child Input Component.

	// We don't get details of the component here really, we're getting the higher order component.
	//console.log(wrapper.debug()); // just to see what's in wrapper
	return wrapper;
}


describe('render', () => {
	describe('word has not been guessed', () => {

		let wrapper;
		beforeEach(() => {
			const initialState = { success: false };
			wrapper = setup(initialState);
		});

		test('renders component without error', () => {
			const component = findByTestAttr(wrapper, 'component-input');	
			expect(component.length).toBe(1);
		});

		test('renders input box', () => {
			const inputBox = findByTestAttr(wrapper, 'input-box');	
			expect(inputBox.length).toBe(1);
		});

		test('renders submit button', () => {
			const submitButton = findByTestAttr(wrapper, 'submit-button');	
			expect(submitButton.length).toBe(1);
		});
	});


	describe('word has been guessed', () => {

		let wrapper;
		beforeEach(() => {
			const initialState = { success: true };
			wrapper = setup(initialState);
    });

		test('renders component without error', () => {
			const component = findByTestAttr(wrapper, 'component-input');	
			expect(component.length).toBe(1);
		});

		test('does not render input box', () => {
			const inputBox = findByTestAttr(wrapper, 'input-box');	
			expect(inputBox.length).toBe(0);
		});

		test('does not render submit button', () => {
			const submitButton = findByTestAttr(wrapper, 'submit-button');	
			expect(submitButton.length).toBe(0);

		});
	});
});


describe('update state', () => {

});
