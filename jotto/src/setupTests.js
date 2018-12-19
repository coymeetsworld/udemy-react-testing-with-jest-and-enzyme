// The Jest configuration for create-react-app is looking for this file.
// If it finds it, it will run this before every test.
import Enzyme from 'enzyme'; // how we're going to be rendering our components and making virtual DOMs out of them.
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ 
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true, //This will keep the componentDidMount from running when we create a shallow wrapper.
});