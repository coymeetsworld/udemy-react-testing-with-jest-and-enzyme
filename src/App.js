import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {

    return (

      /* class and id have their own uses in the app. 
         Developers may come and change it, thus ruining the tests.
         data-test is a made-up attribute used just for testing.
      */
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently</h1> 
        <button data-test="increment-button">Increment counter</button>
      </div>
      
    );
  }
}

export default App;
