import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import NotFound from './NotFound';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path='/login' exact component={Login}/>
		<Route component={NotFound} />
	</Switch>
);

export default Routes;
