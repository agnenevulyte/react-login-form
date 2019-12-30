import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={Home} />
	</Switch>
);

export default Routes;
