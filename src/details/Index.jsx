import { React, Dispatcher } from 'praxis';
import ExpenseDetail from './ExpenseDetail'
import IncomeDetail from './IncomeDetail'
import ExpenseHeader from '../components/header';
import IncomeHeader from '../components/incomeHeader';

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
		var expensesArray = [<ExpenseHeader />];
		var incomeArray = [<IncomeHeader />];
		
		this.state.expenseDetails.forEach(function(expense) {
			let amount = 0;

			if (parseInt(expense.text) < 0) {
				amount = Math.abs(parseInt(expense.text));
				expensesArray.push(<ExpenseDetail key={expense.key} amount={amount} desc={expense.desc}/>);
			} else {
				incomeArray.push(<IncomeDetail key={expense.key} amount={expense.text} desc={expense.desc}/>);
			}            
        });
		expensesArray = expensesArray.concat(incomeArray);
		return (
			<div>
				<h1>Expense Report</h1>
				<ul>{expensesArray}</ul>
			</div>
		);
	}
}