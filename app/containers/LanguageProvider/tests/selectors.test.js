import selectLanguageDomain, { makeSelectLocale } from '../selectors';

describe('makeSelectLanguageDomain', () => {
  it('should select the language state', () => {
    const languageState = {
      languageData: {},
    };
    const mockedState = {
      language: languageState,
    };
    expect(selectLanguageDomain(mockedState)).toEqual(languageState);
  });
});

describe('makeSelectLocale', () => {
  const localeSelector = makeSelectLocale();
  it('should select the locale', () => {
    const state = 'en';
    const mockedState = {
      locale: state,
    };
    expect(localeSelector(mockedState)).toEqual(state);
  });
});
