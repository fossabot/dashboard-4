/**
 *
 * Tests for Navigation
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Navigation, { mapDispatchToProps } from '../index';
import { drawerOpen, drawerClose } from '../actions';
import configureStore from '../../../configureStore';

import { DEFAULT_LOCALE } from '../../../i18n';

describe('<Navigation />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <Navigation dispatch={dispatch} />
        </IntlProvider>
      </Provider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <Navigation />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    describe('onDrawerOpen', () => {
      it('Should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onDrawerOpen).toBeDefined();
      });

      it('Should dispatch drawerOpen when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onDrawerOpen();
        expect(dispatch).toHaveBeenCalledWith(drawerOpen());
      });
    });

    describe('onDrawerClose', () => {
      it('Should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onDrawerClose).toBeDefined();
      });

      it('Should dispatch drawerClose when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onDrawerClose();
        expect(dispatch).toHaveBeenCalledWith(drawerClose());
      });
    });
  });
});
