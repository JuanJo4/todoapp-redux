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
import { TaskList, FiltersWrapper } from './styledComponents';

//  Adding icon to librery (Fontawesome)
library.add(faAngleDown, faTimes, faCircle, faCheckCircle);

/* eslint-disable react/prefer-stateless-function */
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
              <TaskInput
                key={t.id}
                status={t.status}
                task={t.task}
                onTaskIconClick={() => onTaskIconClick(t.id)}
                onTaskChange={evt => onTaskChange(evt, t.id)}
                onTaskRemove={() => onTaskRemove(t.id)}
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
      </>
    );
  }
}

HomePage.propTypes = {
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
