import { React, Dispatcher } from 'praxis';

export default class ExpenseForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		this.onSubmit = () => { this.handleExpenseFormSubmit(); };

		return (
			<form id="expenseForm" ref="expenseForm">
				<input ref="amount" type="text" placeholder="Amount" /><br />
				<input ref="desc" type="text" placeholder="Add Description" /><br />
				<input ref="submit" value="Submit" type="submit" onClick={this.onSubmit} />
				<button ref="close" onClick={this.onClose}>Close</button>
			</form>
		);
	}

	handleExpenseFormSubmit() {
		let amount = this.refs.amount.getDOMNode().value;
		let description = this.refs.desc.getDOMNode().value;

		if (amount === '' || isNaN(amount)) {
			alert('Please add a number for amount');
		} else if (description.trim() === '') {
			alert('Please add a description');
		} else {
			Dispatcher.dispatch({
				action: 'createExpense',
				data: {
					amount: amount,
					desc: description,
					type: this.props.type 
				}
			});

			this.refs.amount.getDOMNode().value = '';
			this.refs.desc.getDOMNode().value = '';
			this.setState({ displayForm: false})
		}
	}
}