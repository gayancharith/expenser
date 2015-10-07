import  { React, Router, Dispatcher }  from 'praxis';
import ExpenseStore from './dashboard/ExpenseStore';
import App from './app/App';
import Dashboard from './dashboard/Dashboard';
import About from './about/About';

let routes = [{
    path: '/',
    component: App,
    indexRoute: { component: Dashboard },
    childRoutes: [{
    	path: 'about',
    	component: About
    }]
}];

Dispatcher.register('expenses', new ExpenseStore());

React.render(<Router routes={routes} />, document.getElementById('app'));