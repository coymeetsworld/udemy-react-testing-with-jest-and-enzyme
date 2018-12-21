import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

// Needs to be a Component as it will conect to redux.
export class UnconnectedInput extends Component {

  /**
   * Create ref for input box
   * @method constructor
   * @param {object} props - Component props.
   * @returns {undefined}
   */
  constructor(props) {
    super(props);

    // Enzyme is not good at manipulating the dom
    // React refs allow us simulating entering text, pull the text out
    this.inputBox = React.createRef();
    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }

  submitGuessedWord(evt) {
    // to prevent submitting the form
    evt.preventDefault();

    const guessedWord = this.inputBox.current.value;

    //if (guessedWord) {
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
    }

  }

  /**
   * Render the component
   * @method render
   * @returns {JSX.Element} - Rendered component
   */
	render() {
		const contents = this.props.success 
			? null
			: (
				<form className="form-inline">
					<input
						data-test="input-box"
            ref={this.inputBox}
						className="mb-2 mx-sm-3"
						id="word-guess"
						type="text"
						placeholder="enter guess" />
					<button
						data-test="submit-button"
						className="btn btn-primary mb-2"
            onClick={this.submitGuessedWord}
						type="submit">
						Submit
					</button>
				</form>
			);
		return (
			<div data-test="component-input">
				{ contents }
			</div>
		)
	}
};

//const mapStateToProps = (state) => {
//destructuring success from the state and returning it.
const mapStateToProps = ({ success }) => {
	return { success }; // first test pass because we wrote this.
}

// Passing an object as a 2nd argument to connect.
// Some people are used to using mapDispatchToProps, but we don't need to really control dispatch here.
// We just want to make sure guessWord is passed as a prop to this component.
export default connect(mapStateToProps, { guessWord })(UnconnectedInput);