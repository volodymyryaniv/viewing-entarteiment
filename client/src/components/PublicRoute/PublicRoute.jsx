import React from 'react';
import routes from '../../consts/routes';
import { Navigate, Outlet } from 'react-router-dom';
import withAuth from '../withHoc/withAuth';

function PublicRoute({children, isAuthenticated}) {
    if (isAuthenticated) {
      return < Navigate to={routes.homePage} replace/>
    }
    return children ? children : <Outlet/>;
}

export default withAuth(PublicRoute);
