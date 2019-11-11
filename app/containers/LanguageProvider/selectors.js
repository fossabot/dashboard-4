/*
 *
 * LangageProvider selectors
 *
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the language domain
 */

const selectLanguageDomain = state => state.language || initialState;

/**
 * Select the language locale
 */

const makeSelectLocale = () =>
  createSelector(
    selectLanguageDomain,
    languageState => languageState.locale,
  );

export default selectLanguageDomain;
export { makeSelectLocale };
