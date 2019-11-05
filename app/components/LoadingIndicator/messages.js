/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'efr-frontend.components.LoadingIndicator';

export default defineMessages({
  details: {
    id: `${scope}.details`,
    defaultMessage: 'Reaching data from space...',
  },
});
