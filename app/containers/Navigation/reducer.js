/*
 *
 * Navigation reducer
 *
 */

import produce from 'immer';
import { DRAWER_OPEN, DRAWER_CLOSE } from './constants';

// The initial state of the App
export const initialState = {
  drawer: {
    open: true,
  },
};

/* eslint-disable default-case, no-param-reassign */
const navigationReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DRAWER_OPEN:
        draft.drawer.open = true;
        break;

      case DRAWER_CLOSE:
        draft.drawer.open = false;
        break;
    }
  });

export default navigationReducer;
