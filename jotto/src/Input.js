import React, { Component } from 'react';
import { connect } from 'react-redux';

// Needs to be a Component as it will connect to redux.
class Input extends Component {
	render() {
		return <div/>
	}
	render() {
		const contents = this.props.success 
			? null
			: (
				<form className="form-inline">
					<input
						data-test="input-box"
						className="mb-2 mx-sm-3"
						id="word-guess"
						type="text"
						placeholder="enter guess" />
					<button
						data-test="submit-button"
						className="btn btn-primary mb-2"
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
	return { success };
}

export default connect(mapStateToProps)(Input);

