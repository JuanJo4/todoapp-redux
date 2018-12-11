/**
 *
 * TaskInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TaskWrapper = styled.div`
  display: flex;
`;
const Button = styled.button`
  cursor: pointer;
  width: 6%;
  outline: none;
`;
const Input = styled.input`
  outline: none;
  flex-grow: 1;
`;

function TaskInput(props) {
  const { status, placeholder, task } = props;
  const icon = {
    default: ['fas', 'angle-down'],
    pending: ['far', 'circle'],
    done: ['far', 'check-circle'],
  };

  return (
    <TaskWrapper className={`task ${status}`}>
      <Button type="button">
        <FontAwesomeIcon icon={icon[status]} />
      </Button>
      <Input type="text" placeholder={placeholder} defaultValue={task} />
    </TaskWrapper>
  );
}

TaskInput.propTypes = {
  status: PropTypes.string,
  placeholder: PropTypes.string,
  task: PropTypes.string,
};

TaskInput.defaultProps = {
  status: 'default',
  placeholder: '',
  task: '',
};

export default TaskInput;
