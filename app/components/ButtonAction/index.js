/**
 *
 * ButtonAction
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

// Esta funcion puede ser un arrow function
function ButtonAction(props) {
  const { children, handleClick, className } = props;
  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

ButtonAction.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default ButtonAction;
