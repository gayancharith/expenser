import  { React, Router, Dispatcher }  from 'praxis';
import ExpenseStore from './dashboard/ExpenseStore';
import App from './app/App';
import Dashboard from './dashboard/Dashboard';
import About from './about/About';
import Details from './details/Index';

let routes = [{
    path: '/',
    component: App,
    indexRoute: { component: Dashboard },
    childRoutes: [
	    {
	    	path: 'about',
	    	component: About
	    },
	    {
	    	path: 'details',
	    	component: Details
	    }
    ]
}];

Dispatcher.register('expenses', new ExpenseStore());

React.render(<Router routes={routes} />, document.getElementById('app'));