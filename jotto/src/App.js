import React, { Component } from 'react';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

class App extends Component {
  render() {

    // Eventually state will come from Redux, but we're hard coding it now.
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} /> 
        <GuessedWords guessedWords={[
          {guessedWord: 'train', letterMatchCount: 3}
        ]} />
      </div>
    );
  }
}

export default App;
