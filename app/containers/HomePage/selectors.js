/**
 *
 * HomePage selectors
 *
 */

// import { createSelector } from 'reselect';
import { initialState } from './reducer';

const makeSelectHomeDomain = state => state.home || initialState;

// const makeSelectUsername = () =>
//   createSelector(
//     selectHome,
//     homeState => homeState.username,
//   );

export default makeSelectHomeDomain;
// export { makeSelectUsername };
