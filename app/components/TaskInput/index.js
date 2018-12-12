/**
 *
 * TaskInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TaskIcon from '../TaskIcon';

const TaskWrapper = styled.div`
  display: flex;
`;
const Input = styled.input`
  outline: none;
  flex-grow: 1;
`;

function TaskInput(props) {
  const { status, placeholder, task, onTaskIconClick } = props;
  const icon = {
    default: ['fas', 'angle-down'],
    pending: ['far', 'circle'],
    done: ['far', 'check-circle'],
  };

  return (
    <TaskWrapper className={`task ${status}`}>
      <TaskIcon icon={icon[status]} onTaskIconClick={onTaskIconClick} />
      <Input type="text" placeholder={placeholder} defaultValue={task} />
    </TaskWrapper>
  );
}

TaskInput.propTypes = {
  status: PropTypes.string,
  placeholder: PropTypes.string,
  task: PropTypes.string,
  onTaskIconClick: PropTypes.func,
};

TaskInput.defaultProps = {
  status: 'default',
  placeholder: '',
  task: '',
};

export default TaskInput;
