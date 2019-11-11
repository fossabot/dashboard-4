/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, {
  // useEffect,
  memo,
} from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Typography from '@material-ui/core/Typography';

export function HomePage() {
  return <Typography variant="body1">Hello</Typography>;
}

HomePage.propTypes = {
  //
};

const mapStateToProps = createStructuredSelector({
  //
});

// export function mapDispatchToProps(dispatch) {
//   return {
//     //
//   };
// }

const withConnect = connect(
  mapStateToProps,
  // mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
