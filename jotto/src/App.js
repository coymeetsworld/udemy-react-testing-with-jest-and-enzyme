import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import { getSecretWord } from './actions';

// Want to export the unconnected component so we can mock getSecretWord as a prop to the unconnected component.
export class UnconnectedApp extends Component {

  /**
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    // get the secret word
    this.props.getSecretWord(); // action creator in production that will go out to the server and get the secret word and update the piece of state. 
    // for tests, it will be the getSecretWord mock.
  }

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

export default connect(mapStateToProps, { getSecretWord } )(UnconnectedApp);
