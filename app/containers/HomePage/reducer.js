/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION } from './constants';

export const initialState = fromJS({
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
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default homePageReducer;
