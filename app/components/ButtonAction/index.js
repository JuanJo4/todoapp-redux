/**
 *
 * ButtonAction
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

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
