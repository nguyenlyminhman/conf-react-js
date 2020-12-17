import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../module/home';
import Login from '../module/login';
import Demo from '../module/demo';
import Test from '../module/test';

const RouteConf = props => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/demo" component={Demo} />
            <Route exact path="/test" component={Test} />
        </div>
    );
};


export default RouteConf;