import  { React, Router, Dispatcher }  from 'praxis';
import ExpenseStore from './expense/ExpenseStore';
import App from './app/App';
import Expense from './expense/Index';
import Income from './expense/Income';
import About from './about/About';
import Details from './details/Index';

let routes = [{
    path: '/',
    component: App,
    indexRoute: { component: Details },
    childRoutes: [
	    {
	    	path: 'details',
	    	component: Details
	    },
	    {
	    	path: 'expenses',
	    	component: Expense
	    },
	    {
	    	path: 'income',
	    	component: Income
	    }
    ]
}];

Dispatcher.register('expenses', new ExpenseStore());

React.render(<Router routes={routes} />, document.getElementById('app'));