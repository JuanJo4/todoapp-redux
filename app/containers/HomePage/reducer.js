/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  TASK_ICON_CLICK,
  TASK_ICON_CLICK_DEFAULT,
  TASK_CHANGE,
  NEW_TASK_CHANGE,
  TASK_SUBMIT,
} from './constants';

export const initialState = fromJS({
  newTask: '',
  tasks: [
    {
      id: 123,
      status: 'pending',
      task: 'Hello world',
    },
    {
      id: 1234,
      status: 'done',
      task: 'Hello world done',
    },
    {
      id: 1235,
      status: 'done',
      task: 'Hello world done 2',
    },
    {
      id: 1236,
      status: 'pending',
      task: 'Hello world pending',
    },
    {
      id: 1237,
      status: 'pending',
      task: 'Hello world pending 2',
    },
  ],
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case TASK_ICON_CLICK: {
      const tasks = state.get('tasks');
      return state.set(
        'tasks',
        tasks.update(
          tasks.findIndex(item => item.get('id') === action.tid),
          item =>
            item.set(
              'status',
              item.get('status') === 'pending' ? 'done' : 'pending',
            ),
        ),
      );
    }
    case TASK_ICON_CLICK_DEFAULT: {
      const tasks = state.get('tasks');

      const nTasksDone = tasks.reduce(
        (acc, item) => acc + (item.get('status') === 'done'),
        0,
      );
      const isAllTasksDone = nTasksDone === tasks.count();

      return state.set(
        'tasks',
        tasks.map(
          item =>
            isAllTasksDone
              ? item.set('status', 'pending')
              : item.set('status', 'done'),
        ),
      );
    }
    case TASK_CHANGE: {
      const tasks = state.get('tasks');

      return state.set(
        'tasks',
        tasks.update(
          tasks.findIndex(item => item.get('id') === action.tid),
          item => item.set('task', action.value),
        ),
      );
    }
    case NEW_TASK_CHANGE: {
      return state.set('newTask', action.value);
    }
    case TASK_SUBMIT: {
      const event = action.evt;
      const task = event.target.elements.task.value;

      event.preventDefault();
      event.stopPropagation();

      const tasks = state.get('tasks').push(
        fromJS({
          id: Date.now(),
          status: 'pending',
          task,
        }),
      );

      return state.set('newTask', '').set('tasks', tasks);
    }
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default homePageReducer;
