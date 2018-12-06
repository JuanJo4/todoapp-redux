/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';

import H1Link from '../../components/H1Link';
import TaskInput from '../../components/TaskInput';
import { TaskList } from './styledComponents';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    console.log('Props', this.props);
    return (
      <>
        <Helmet>
          <title>Todo App</title>
          <meta
            name="description"
            content="Todo App. Learning ReactJs, Redux and React-Boilerplate"
          />
        </Helmet>
        <H1Link title="todos" url="/" />
        <TaskList>
          <TaskInput />
        </TaskList>
      </>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });

export default compose(
  withReducer,
  withConnect,
)(HomePage);
