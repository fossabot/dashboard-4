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

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
// import {
//   makeSelectError,
// } from 'containers/App/selectors';
// import H2 from 'components/H2';
// import messages from './messages';
// import { changeUsername } from './actions';
// import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

const STATE_KEY = 'home';

export function HomePage() {
  useInjectReducer({ key: STATE_KEY, reducer });
  useInjectSaga({ key: STATE_KEY, saga });

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
