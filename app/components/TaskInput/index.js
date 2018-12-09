/**
 *
 * TaskInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const TaskWrapper = styled.div``;
const Button = styled.button`
  cursor: pointer;
`;

function TaskInput(props) {
  const { status } = props;
  const icon = {
    default: ['fas', 'angle-down'],
    pending: ['far', 'circle'],
    done: ['far', 'check-circle'],
  };

  return (
    <TaskWrapper className={status}>
      <Button type="button">
        <FontAwesomeIcon icon={icon[status]} />
      </Button>
      <input type="text" />
    </TaskWrapper>
  );
}

TaskInput.propTypes = {
  status: PropTypes.string,
};

TaskInput.defaultProps = {
  status: 'default',
};

export default TaskInput;
