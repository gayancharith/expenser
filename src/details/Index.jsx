import { React, Dispatcher } from 'praxis';
import Detail from './Details';

export default class Expense extends React.Component {
	constructor(props) {
		super(props);
		this.state = {expenseDetails: Dispatcher.get('expenses')};

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
		let tableStyle = {
			border: '1px solid black',			
			borderCollapse: 'collapse'
		};
		let expensesArray = [];
		let incomeArray = [];
		let totalAmount = 0;
		
		this.state.expenseDetails.forEach((expense) => {
			let amount = parseInt(expense.amount);

			if (expense.type === 'expense') {
				totalAmount -= amount;
				expensesArray.push(<Detail key={expense.key} amount={amount} desc={expense.desc}/>);
			} else {
				totalAmount += amount;
				incomeArray.push(<Detail key={expense.key} amount={amount} desc={expense.desc}/>);
			}            
        });

		return (
			<div>
				<h1>Expense Summary Report</h1> <br/><hr/>
				<h3>Total Income:  {totalAmount}</h3> <br/><hr/>
				<h3>Income Details</h3> <br/>
				<table width="40%" style={tableStyle}>{incomeArray}</table>  <br/><hr/>
				<h3>Expense Details</h3> <br/>
				<table width="40%" style={tableStyle}>{expensesArray}</table>
			</div>
		);
	}
}