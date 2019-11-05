import React from 'react';
import { FormattedMessage } from 'react-intl';

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

import messages from './messages';
import MaterialStyles from '../../material-styles';

function LoadingIndicator() {
  const materialClasses = MaterialStyles();

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <CircularProgress className={materialClasses.progress} />
      </Grid>
      <Grid item>
        <FormattedMessage {...messages.details} />
      </Grid>
    </Grid>
  );
}

export default LoadingIndicator;
