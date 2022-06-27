import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

const withAuthHoc = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} />;
  };
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.token
});

const withAuth = compose(
  connect(mapStateToProps),
  withAuthHoc
);

export default withAuth;
