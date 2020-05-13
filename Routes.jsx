import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginStep1 from '../_components/LoginStep1';
import LoginStep2 from '../_components/LoginStep2';
import LoginStep3 from '../_components/LoginStep3';
import Dashboard from '../_components/Dashboard';

import GlobalLayout from '../_layout/GlobalLayout';



function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={LoginStep1} />
				<Route exact path="/loginStep2" component={LoginStep2} />
				<Route exact path="/loginStep3" component={LoginStep3} />
				<GlobalLayout>
					<Route exact path="/dashboard" component={Dashboard} />
				</GlobalLayout>
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
