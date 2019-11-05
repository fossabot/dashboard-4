/*
 *
 * Navigation selectors
 *
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the test state domain
 */

const selectNavigationDomain = state => state.navigation || initialState;

/**
 * Other specific selectors
 */

const makeSelectDrawerOpen = () =>
  createSelector(
    selectNavigationDomain,
    navigationState => navigationState.drawer.open,
  );

export default selectNavigationDomain;
export { makeSelectDrawerOpen };
