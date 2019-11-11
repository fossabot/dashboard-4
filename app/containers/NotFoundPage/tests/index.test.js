/**
 * Testing the NotFoundPage
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import NotFound from '../index';
import messages from '../messages';

import { DEFAULT_LOCALE } from '../../../i18n';

describe('<NotFound />', () => {
  it('should render the Page Not Found text', () => {
    const { queryByText } = render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <NotFound />
      </IntlProvider>,
    );
    expect(queryByText(messages.header.defaultMessage)).not.toBeNull();
  });
});
