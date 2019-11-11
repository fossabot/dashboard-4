import selectGlobalDomain, { makeSelectRouterDomain } from '../selectors';

describe('selectGlobalDomain', () => {
  it('should select the global state', () => {
    const globalState = {
      globalData: {},
    };
    const mockedState = {
      global: globalState,
    };
    expect(selectGlobalDomain(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectRouterDomain', () => {
  it('should select the router state', () => {
    const routerState = {
      routerData: {},
    };
    const mockedState = {
      router: routerState,
    };
    expect(makeSelectRouterDomain(mockedState)).toEqual(routerState);
  });
});
