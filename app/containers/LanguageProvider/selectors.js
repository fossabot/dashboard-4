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

const makeSelectLanguageDomain = state => state.language || initialState;

/**
 * Select the language locale
 */

const makeSelectLocale = () =>
  createSelector(
    makeSelectLanguageDomain,
    languageState => languageState.locale,
  );

export default makeSelectLanguageDomain;
export { makeSelectLocale };
