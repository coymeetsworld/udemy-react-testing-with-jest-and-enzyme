import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import { getSecretWord } from './actions';

class App extends Component {
  render() {

    // Eventually state will come from Redux, but we're hard coding it now.
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} /> 
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // get what we need from the state
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
}

export default connect(mapStateToProps, { getSecretWord } )(App);
