import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import Home from './pages/Home';
import NotFound from './Components/NotFound';
import PrivateRoute from './Components/PrivateRoute';

import {history} from './history';

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/Login"/>
            <Route component={Registrar} exact path="/Registrar"/>
            <PrivateRoute component={Home} exact path="/"/>
            <PrivateRoute component={NotFound} />
        </Switch>
    </Router>
);


export default Routes;