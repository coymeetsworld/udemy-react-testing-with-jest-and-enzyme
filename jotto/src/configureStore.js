// This file will be useful when we start to add middlewares.
import { createStore } from 'redux';
import rootReducer from './reducers';

export default createStore(rootReducer);

