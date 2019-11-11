/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  DUMMY, // test
} from './constants';

// The initial state of the App
export const initialState = {
  // currently nothing
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  // eslint-disable-next-line no-unused-vars
  produce(state, draft => {
    switch (action.type) {
      case DUMMY:
        // draft.dummy = true;
        break;
    }
  });

export default appReducer;
