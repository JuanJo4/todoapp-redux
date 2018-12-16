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
  const {
    status,
    placeholder,
    task,
    onTaskIconClick,
    onTaskChange,
    onTaskSubmit,
    onTaskRemove,
  } = props;
  const icon = {
    default: ['fas', 'angle-down'],
    pending: ['far', 'circle'],
    done: ['far', 'check-circle'],
  };

  return (
    <TaskWrapper className={`task ${status}`}>
      <TaskIcon icon={icon[status]} onTaskIconClick={onTaskIconClick} />
      <Input
        type="text"
        name="task"
        placeholder={placeholder}
        value={task}
        onChange={onTaskChange}
        onKeyDown={onTaskSubmit}
      />
      <TaskIcon
        className="delete"
        icon={['fas', 'times']}
        onTaskIconClick={onTaskRemove}
      />
    </TaskWrapper>
  );
}

TaskInput.propTypes = {
  status: PropTypes.string,
  placeholder: PropTypes.string,
  task: PropTypes.string,
  onTaskIconClick: PropTypes.func,
  onTaskChange: PropTypes.func,
  onTaskSubmit: PropTypes.func,
  onTaskRemove: PropTypes.func,
};

TaskInput.defaultProps = {
  status: 'default',
  placeholder: '',
  task: '',
};

export default TaskInput;
