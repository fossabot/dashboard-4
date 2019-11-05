/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Navigation from 'containers/Navigation';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'components/Footer';

import MaterialStyles from '../../material-styles';

export default function App() {
  const materialClasses = MaterialStyles();

  return (
    <div className={materialClasses.root}>
      <Helmet
        titleTemplate="%s - Enterprise Flow Repository"
        defaultTitle="Enterprise Flow Repository"
      >
        <meta
          name="description"
          content="Repository of flow for enterprise information systems"
        />
      </Helmet>
      <CssBaseline />
      <Navigation />
      <Container maxWidth="lg">
        <Typography component="div" style={{ height: '100vh' }}>
          <main className={materialClasses.content}>
            <div className={materialClasses.toolbar} />
            <Grid container spacing={3} direction="column" alignItems="stretch">
              <Grid item>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="" component={NotFoundPage} />
                </Switch>
              </Grid>
              <Grid item>
                <Footer />
              </Grid>
            </Grid>
          </main>
        </Typography>
      </Container>
    </div>
  );
}
