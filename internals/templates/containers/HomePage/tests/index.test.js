import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import HomePage from '../index';

import { DEFAULT_LOCALE } from '../../../i18n';

describe('<HomePage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <HomePage />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
