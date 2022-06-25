import React from 'react';
import routes from '../../consts/routes';
import { connect } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PublicRoute({children, isAuthenticated}) {
    if (isAuthenticated) {
      return < Navigate to={routes.homePage} replace/>
    }
    return children ? children : <Outlet/>;

}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.token
});

export default connect(mapStateToProps)(PublicRoute);
