import { React, Dispatcher } from 'praxis';
import ExpenseDetail from './ExpenseDetail'

export default class Expense extends React.Component {
	constructor(props) {
		super(props);
		this.state = {expenseDetails: Dispatcher.get('expenses')};
		console.log('form constructor callled');

		this.onStoreChange = () => {
            this.forceUpdate();
        };        
	}

	componentWillMount() {
        Dispatcher.subscribe('expenses', 'change', this.onStoreChange);
    }

    componentWillUnmount() {
        Dispatcher.unsubscribe('expenses', 'change', this.onStoreChange);
    }

	render() {
		var expensesArray = [];
		this.state.expenseDetails.forEach(function(expense) {
			console.log(expense);
            expensesArray.push(<ExpenseDetail key={expense.key} amount={expense.text} desc={expense.desc}/>);
        });
		// console.log(expensesArray)
		return (
			<ul>{expensesArray}</ul>
		);
	}
}