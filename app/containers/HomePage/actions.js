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
