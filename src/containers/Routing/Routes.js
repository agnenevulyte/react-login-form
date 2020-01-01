import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import AppliedRoute from '../AppliedRoute';
import NotFound from './NotFound';
import Signup from '../Signup';

const Routes = ({ appProps }) => (
	<Switch>
		{/* to use AppliedRoute component, we include it in the routes where we need to have the appProps passed in */}
		<AppliedRoute exact path="/" component={Home} />
		<AppliedRoute path='/login' exact component={Login} appProps={appProps} />
		<AppliedRoute path='/signup' exact component={Signup} appProps={appProps} />
		{ /* Finally, catch all unmatched routes */ }
		<Route component={NotFound} />
	</Switch>
);

export default Routes;
