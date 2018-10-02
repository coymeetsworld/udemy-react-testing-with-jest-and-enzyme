import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }


  render() {

    return (

      /* class and id have their own uses in the app. 
         Developers may come and change it, thus ruining the tests.
         data-test is a made-up attribute used just for testing.
      */
     <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1> 
        <button 
          data-test="increment-button"
          onClick={() => this.setState({ counter: this.state.counter + 1})}
        >
          Increment counter
        </button>
      </div>
    );
  }
}

export default App;
