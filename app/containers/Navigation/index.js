/*
 *
 * Navigation
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import messages from './messages';
import { makeSelectDrawerOpen } from './selectors';
import { drawerOpen, drawerClose } from './actions';

import MaterialStyles from '../../material-styles';

export function Navigation({
  drawerOpenSelector,
  onDrawerOpen,
  onDrawerClose,
}) {
  const materialClasses = MaterialStyles();
  const materialTheme = useTheme();

  return (
    <div>
      <AppBar
        position="fixed"
        className={clsx(materialClasses.appBar, {
          [materialClasses.appBarShift]: drawerOpenSelector,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onDrawerOpen}
            edge="start"
            className={clsx(materialClasses.menuButton, {
              [materialClasses.hide]: drawerOpenSelector,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <FormattedMessage {...messages.appbarHeader} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(materialClasses.drawer, {
          [materialClasses.drawerOpen]: drawerOpenSelector,
          [materialClasses.drawerClose]: !drawerOpenSelector,
        })}
        classes={{
          paper: clsx({
            [materialClasses.drawerOpen]: drawerOpenSelector,
            [materialClasses.drawerClose]: !drawerOpenSelector,
          }),
        }}
        open={drawerOpenSelector}
      >
        <div className={materialClasses.toolbar}>
          <IconButton onClick={onDrawerClose}>
            {materialTheme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

Navigation.propTypes = {
  drawerOpenSelector: PropTypes.bool,
  onDrawerOpen: PropTypes.func,
  onDrawerClose: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  drawerOpenSelector: makeSelectDrawerOpen(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onDrawerOpen: () => dispatch(drawerOpen()),
    onDrawerClose: () => dispatch(drawerClose()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Navigation);
