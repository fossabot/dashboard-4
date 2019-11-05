import React from 'react';
import { FormattedMessage } from 'react-intl';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import GitHubIcon from '@material-ui/icons/GitHub';

import Button from 'components/Button';
import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';

import MaterialStyles from '../../material-styles';

function Footer() {
  const materialClasses = MaterialStyles();

  return (
    <div>
      <Grid container spacing={2} direction="column" alignItems="stretch">
        <Grid item>
          <Divider />
        </Grid>
        <Grid item>
          <Paper className={materialClasses.paper}>
            <Grid
              container
              spacing={3}
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <LocaleToggle />
              </Grid>
              <Grid item>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <FormattedMessage {...messages.license} />
                  </Grid>
                  <Grid item>
                    <Button
                      href="https://github.com/MiddlewareSolutions/EnterpriseFlowRepository-frontend"
                      startIcon={<GitHubIcon />}
                    >
                      GitHub
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
