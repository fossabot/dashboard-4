import makeSelectLanguageDomain from '../selectors';

describe('makeSelectLanguageDomain', () => {
  it('should select the global state', () => {
    const globalState = {};
    const mockedState = {
      language: globalState,
    };
    expect(makeSelectLanguageDomain(mockedState)).toEqual(globalState);
  });
});
