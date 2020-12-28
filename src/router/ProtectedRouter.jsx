import _ from 'lodash';
import React from 'react';
import { Route, Redirect } from 'react-router';
// import { useAuthenticated, useRoleAccount } from 'core/hooks/authentication';

const ProtectedRoute = props => {

  const { component: RealComponent, path, roles = [] } = props;
  const isAuthenticated = false;
  const role = null;

  return (
    <Route
      path={path}
      render={(props) => 
        isAuthenticated && (_.isEmpty(roles) || roles.includes(role)) ? (
          <RealComponent />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state:    { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
