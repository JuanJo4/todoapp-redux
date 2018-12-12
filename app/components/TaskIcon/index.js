/**
 *
 * TaskIcon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = styled.button`
  cursor: pointer;
  width: 6%;
  outline: none;
`;

function TaskIcon(props) {
  const { icon, onTaskIconClick } = props;
  return (
    <Button type="button" onClick={onTaskIconClick}>
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
}

TaskIcon.propTypes = {
  icon: PropTypes.array.isRequired,
  onTaskIconClick: PropTypes.func,
};

export default TaskIcon;
