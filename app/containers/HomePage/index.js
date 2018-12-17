/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
//  Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
//  Redux
import injectReducer from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import {
  taskIconClick,
  taskIconClickDefault,
  taskChange,
  newTaskChange,
  taskSubmit,
  taskRemove,
  filterTasks,
  clearCompleted,
} from './actions';
//  Components
import H1Link from '../../components/H1Link';
import TaskInput from '../../components/TaskInput';
import ButtonAction from '../../components/ButtonAction';
import { TaskList, FiltersWrapper, BottomBorder } from './styledComponents';

//  Adding icon to librery (Fontawesome)
library.add(faAngleDown, faTimes, faCircle, faCheckCircle);

/* eslint-disable react/prefer-stateless-function */
const MicroComponent = props => {
  const { onTaskIconClick, onTaskChange, onTaskRemove, task } = props;
  const handleTaskIconClick = () => {
    onTaskIconClick(task.id);
  };
  const handleTaskChange = event => {
    onTaskChange(event, task.id);
  };
  const handleTaskRemove = () => {
    onTaskRemove(task.id);
  };
  return (
    <TaskInput
      key={task.id}
      status={task.status}
      task={task.task}
      onTaskIconClick={handleTaskIconClick}
      onTaskChange={handleTaskChange}
      onTaskRemove={handleTaskRemove}
    />
  );
};

MicroComponent.propTypes = {
  onTaskIconClick: PropTypes.func.isRequired,
  onTaskChange: PropTypes.func.isRequired,
  onTaskRemove: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
};

export class HomePage extends React.PureComponent {
  render() {
    const {
      homePage: { newTask, tasks, itemsLeft, itemsCompleted, currentFilter },
      onTaskIconClick,
      onTaskIconClickDefault,
      onTaskChange,
      onNewTaskChange,
      onTaskSubmit,
      onTaskRemove,
      onFilterTasks,
      onClearCompleted,
    } = this.props;

    return (
      <>
        <Helmet>
          <title>Todo App</title>
          <meta
            name="description"
            content="Todo App. Learning ReactJs, Redux and React-Boilerplate"
          />
        </Helmet>
        <H1Link title="todos" url="/" className="main-header" />
        <TaskList className="task-list">
          <form onSubmit={onTaskSubmit}>
            <TaskInput
              placeholder="What's need to be done?"
              task={newTask}
              onTaskIconClick={onTaskIconClickDefault}
              onTaskChange={onNewTaskChange}
            />
          </form>

          {tasks
            .filter(
              t =>
                currentFilter === 'all' ||
                (currentFilter === 'active' && t.status === 'pending') ||
                (currentFilter === 'completed' && t.status === 'done'),
            )
            .map(t => (
              <MicroComponent
                onTaskIconClick={onTaskIconClick}
                onTaskChange={onTaskChange}
                onTaskRemove={onTaskRemove}
                task={t}
              />
            ))}

          <FiltersWrapper>
            <div className="items-left">{`${itemsLeft} items left`}</div>
            <div className="filters">
              <ButtonAction
                handleClick={() => onFilterTasks('all')}
                className={currentFilter === 'all' ? 'active' : ''}
              >
                All
              </ButtonAction>
              <ButtonAction
                handleClick={() => onFilterTasks('active')}
                className={currentFilter === 'active' ? 'active' : ''}
              >
                Active
              </ButtonAction>
              <ButtonAction
                handleClick={() => onFilterTasks('completed')}
                className={currentFilter === 'completed' ? 'active' : ''}
              >
                Completed
              </ButtonAction>
            </div>

            <div className="clear-completed">
              {tasks.filter(t => t.status === 'done').length === 0 || (
                <ButtonAction handleClick={onClearCompleted}>
                  {`Clear completed (${itemsCompleted})`}
                </ButtonAction>
              )}
            </div>
          </FiltersWrapper>
        </TaskList>
        <BottomBorder className="before-last" />
        <BottomBorder className="last" />
      </>
    );
  }
}

HomePage.propTypes = {
  // Todos los proptypes que vienen del mapDispatchToProps deben ser required.
  homePage: PropTypes.object.isRequired,
  onTaskIconClick: PropTypes.func,
  onTaskIconClickDefault: PropTypes.func,
  onTaskChange: PropTypes.func,
  onNewTaskChange: PropTypes.func,
  onTaskSubmit: PropTypes.func,
  onTaskRemove: PropTypes.func,
  onFilterTasks: PropTypes.func,
  onClearCompleted: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onTaskIconClick: tid => dispatch(taskIconClick(tid)),
    onTaskIconClickDefault: () => dispatch(taskIconClickDefault()),
    onTaskChange: (evt, tid) => dispatch(taskChange(evt.target.value, tid)),
    onNewTaskChange: evt => dispatch(newTaskChange(evt.target.value)),
    onTaskSubmit: evt => dispatch(taskSubmit(evt)),
    onTaskRemove: tid => dispatch(taskRemove(tid)),
    onFilterTasks: filter => dispatch(filterTasks(filter)),
    onClearCompleted: () => dispatch(clearCompleted()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });

export default compose(
  withReducer,
  withConnect,
)(HomePage);
