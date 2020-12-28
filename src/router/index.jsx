import React, {Component} from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import ProtectedRouters from './ProtectedRouter';

export default class RouterApp extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { routes = [] } = this.props;
    return (
      <Switch>
        {
          routes.filter(
            route => route.component || route.redirect
          ).map(
            ({ redirect, ...route }) => {
              if (redirect) return (
                <Route { ...route } >
                  <Redirect { ...redirect } />
                </Route>
              );
              let RealComponent = route.component;
              return route.isAuthPage ?
                (
                  <ProtectedRouters {...route} />
                ) : (
                  <Route
                    {...route}
                    render={() => <RealComponent />}
                  />
                );
            }
          )
        }
      </Switch>
    );
  }
}
