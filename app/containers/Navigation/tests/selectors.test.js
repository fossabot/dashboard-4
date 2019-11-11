import selectNavigationDomain, { makeSelectDrawerOpen } from '../selectors';

describe('selectNavigationDomain', () => {
  it('should select the navigation state', () => {
    const navigationState = {
      navigationData: {},
    };
    const mockedState = {
      navigation: navigationState,
    };
    expect(selectNavigationDomain(mockedState)).toEqual(navigationState);
  });
});

describe('makeSelectDrawerOpen', () => {
  const drawerOpenSelector = makeSelectDrawerOpen();
  it('should select the drawerOpen', () => {
    const state = true;
    const mockedState = {
      drawer: {
        open: state,
      },
    };
    expect(drawerOpenSelector(mockedState)).toEqual(state);
  });
});
