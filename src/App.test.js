import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without crashing', () => {

  const wrapper = shallow(<App />);
  //console.log(wrapper.debug()); // prints out DOM as a string

  expect(wrapper).toBeTruthy(); 
});
