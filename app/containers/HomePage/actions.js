/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  TASK_ICON_CLICK,
  TASK_ICON_CLICK_DEFAULT,
  TASK_CHANGE,
  NEW_TASK_CHANGE,
  TASK_SUBMIT,
  TASK_REMOVE,
  FILTER_TASKS,
  CLEAR_COMPLETED,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function taskIconClick(tid) {
  return {
    type: TASK_ICON_CLICK,
    tid,
  };
}

export function taskIconClickDefault() {
  return {
    type: TASK_ICON_CLICK_DEFAULT,
  };
}

export function taskChange(value, tid) {
  return {
    type: TASK_CHANGE,
    value,
    tid,
  };
}

export function newTaskChange(value) {
  return {
    type: NEW_TASK_CHANGE,
    value,
  };
}

export function taskSubmit(evt) {
  return {
    type: TASK_SUBMIT,
    evt,
  };
}

export function taskRemove(tid) {
  return {
    type: TASK_REMOVE,
    tid,
  };
}

export function filterTasks(filter) {
  return {
    type: FILTER_TASKS,
    filter,
  };
}

export function clearCompleted() {
  return {
    type: CLEAR_COMPLETED,
  };
}
