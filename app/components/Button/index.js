/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import MaterialButton from '@material-ui/core/Button';

import MaterialStyles from '../../material-styles';

function Button({
  handleRoute,
  href,
  onClick,
  children,
  startIcon,
  endIcon,
  primary,
  full,
  ariaControls,
  ariaHaspopup,
}) {
  const materialClasses = MaterialStyles();

  return (
    <MaterialButton
      variant={full ? 'contained' : null}
      color={primary ? 'primary' : 'secondary'}
      className={materialClasses.button}
      href={href}
      target={href ? '_blank' : null}
      onClick={handleRoute || onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      aria-controls={ariaControls}
      aria-haspopup={ariaHaspopup}
    >
      {Children.toArray(children)}
    </MaterialButton>
  );
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  startIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  endIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  primary: PropTypes.bool,
  full: PropTypes.bool,
  ariaControls: PropTypes.string,
  ariaHaspopup: PropTypes.bool,
};

export default Button;
