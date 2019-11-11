/**
 *
 * The global state selectors
 *
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobalDomain = state => state.global || initialState;

const makeSelectRouterDomain = state => state.router;

const makeSelectLocation = () =>
  createSelector(
    makeSelectRouterDomain,
    routerState => routerState.location,
  );

export default selectGlobalDomain;
export { makeSelectRouterDomain, makeSelectLocation };
