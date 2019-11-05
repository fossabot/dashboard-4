/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LanguageIcon from '@material-ui/icons/Language';

import Button from 'components/Button';
import messages from './messages';
import { appLocales } from '../../i18n';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';

export function LocaleToggle({ locale, onLocaleToggle }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = evt => {
    setAnchorEl(evt.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = appLocales.map(value => (
    <MenuItem
      key={value}
      onClick={() => {
        handleClose();
        onLocaleToggle(value);
      }}
      selected={value === locale}
    >
      <FormattedMessage {...messages[value]} />
    </MenuItem>
  ));

  return (
    <div>
      <Button
        ariaControls="locale-toggle"
        ariaHaspopup
        onClick={handleClick}
        startIcon={<LanguageIcon />}
      >
        <FormattedMessage {...messages[locale]} />
      </Button>
      <Menu
        id="locale-toggle"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems}
      </Menu>
    </div>
  );
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({
    locale,
  }),
);

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: locale => dispatch(changeLocale(locale)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocaleToggle);
