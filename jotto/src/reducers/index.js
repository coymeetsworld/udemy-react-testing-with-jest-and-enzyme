// our root reducers
import { combineReducers } from 'redux';
import success from './successReducer';
import guessedWords from './guessedWordsReducer';

export default combineReducers({
  success, // success state will use the success reducer from successReducer 
  guessedWords,
});