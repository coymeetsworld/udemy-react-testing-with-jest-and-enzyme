/**
  It will recieve the success prop from its parent, and show a congrats banner if prop exists.

  Simple component, so it doesn't need to connect to Redux or use a Class.
*/
import React from 'react';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if 'success' prop doesn't exist)
 */
export default (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return (
      <div data-test="component-congrats"/>
    )
  }
}
