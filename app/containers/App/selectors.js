/**
 *
 * The global state selectors
 *
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const makeSelectGlobalDomain = state => state.global || initialState;

const makeSelectRouterDomain = state => state.router;

const makeSelectLocation = () =>
  createSelector(
    makeSelectRouterDomain,
    routerState => routerState.location,
  );

// const makeSelectCurrentUser = () =>
//   createSelector(
//     selectGlobal,
//     globalState => globalState.currentUser,
//   );

// const makeSelectHeaderDrawerOpen = () =>
//   createSelector(
//     selectGlobal,
//     globalState => globalState.header.drawer.open,
//   );

export default makeSelectGlobalDomain;
export {
  makeSelectRouterDomain,
  makeSelectLocation,
  // makeSelectCurrentUser,
  // makeSelectHeaderDrawerOpen,
};
