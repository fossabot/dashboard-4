/**
 *
 * Tests for LocaleToggle
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import LocaleToggle, { mapDispatchToProps } from '../index';
import { changeLocale } from '../../LanguageProvider/actions';
import LanguageProvider from '../../LanguageProvider';

import configureStore from '../../../configureStore';
import { DEFAULT_LOCALE, translationMessages } from '../../../i18n';

describe('<LocaleToggle />', () => {
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
          <LocaleToggle dispatch={dispatch} />
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
        <LanguageProvider messages={translationMessages}>
          <LocaleToggle />
        </LanguageProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  // it('Should present the default `en` english language option', () => {
  //   const { container } = render(
  //     <Provider store={store}>
  //       <LanguageProvider messages={translationMessages}>
  //         <LocaleToggle />
  //       </LanguageProvider>
  //     </Provider>,
  //   );
  //   expect(container.querySelector('option[value={DEFAULT_LOCALE}]')).not.toBeNull();
  // });

  describe('mapDispatchToProps', () => {
    describe('onLocaleToggle', () => {
      it('Should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onLocaleToggle).toBeDefined();
      });

      it('Should dispatch changeLocale when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const locale = 'fr';
        const evt = locale;
        result.onLocaleToggle(evt);
        expect(dispatch).toHaveBeenCalledWith(changeLocale(locale));
      });
    });
  });
});
