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
} from './actions';
//  Components
import H1Link from '../../components/H1Link';
import TaskInput from '../../components/TaskInput';
import { TaskList, FiltersWrapper } from './styledComponents';

//  Adding icon to librery (Fontawesome)
library.add(faAngleDown, faTimes, faCircle, faCheckCircle);

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    const {
      homePage: { newTask, tasks, itemsLeft, itemsCompleted },
      onTaskIconClick,
      onTaskIconClickDefault,
      onTaskChange,
      onNewTaskChange,
      onTaskSubmit,
      onTaskRemove,
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

          {tasks.map(t => (
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
              <button type="button">All</button>
              <button type="button">Active</button>
              <button type="button">Completed</button>
            </div>
            <button
              type="button"
              className="clear-completed"
            >{`Clear completed (${itemsCompleted})`}</button>
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
