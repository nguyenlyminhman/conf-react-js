import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

const FullscreenLayout = lazy(() => import(/* webpackChunkName: "layouts" */ 'layout/fullscreen'));
const DefaultLayout = lazy(() => import(/* webpackChunkName: "layouts" */ 'layout/default'));

class Application extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={false}>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/login" />
            </Route>
            <Route path="/yeb" render={() => <DefaultLayout />} />
            <Route path="/" render={() => <FullscreenLayout />} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default Application;
