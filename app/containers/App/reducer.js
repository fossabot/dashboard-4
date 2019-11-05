/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

// import produce from 'immer';
// import { HEADER_DRAWER_OPEN, HEADER_DRAWER_CLOSE } from './constants';

// // The initial state of the App
// export const initialState = {
//   header: {
//     drawer: {
//       open: true,
//     },
//   },
//   currentUser: false,
// };

// /* eslint-disable default-case, no-param-reassign */
// const appReducer = (state = initialState, action) =>
//   produce(state, draft => {
//     switch (action.type) {
//       case HEADER_DRAWER_OPEN:
//         draft.header.drawer.open = true;
//         break;

//       case HEADER_DRAWER_CLOSE:
//         draft.header.drawer.open = false;
//         break;
//     }
//   });

// export default appReducer;
