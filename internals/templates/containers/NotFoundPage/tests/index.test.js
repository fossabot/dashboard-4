import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import NotFoundPage from '../index';

import { DEFAULT_LOCALE } from '../../../i18n';

describe('<NotFoundPage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <NotFoundPage />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
