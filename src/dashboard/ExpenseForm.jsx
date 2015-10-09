import { React, Dispatcher } from 'praxis';

export default class ExpenseForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayForm: true
		}

		this.onSubmit = () => {
			this.handleExpenseFormSubmit();
		}

		this.onClose = () => {
			this.handleClose();
		}
	}

	displayForm() {
		this.setState({ displayForm: true });
	}

	componentWillMount() {
		this.setState({displayForm: false});
	}

	render() {
		let formHideStyle = {};
		let formState = true;
		if(!this.state.displayForm){
			formHideStyle = {
				display: 'none'
			}
		} else {
			formHideStyle = {
				display: 'block'
			}
		}

		return (
			<form id="expenseForm" ref="expenseForm" style={formHideStyle}> 				
				<input ref="amount" type="text" placeholder="Amount" /><br />
				<input ref="desc" type="text" placeholder="Add Description" /><br />
				<input ref="submit" value="Submit" type="submit" onClick={this.onSubmit} />
				<button ref="close" onClick={this.onClose}>Close</button>						
			</form>
		);
	}

	handleClose () {
		this.setState({displayForm: false});		
	}

	handleExpenseFormSubmit() {
		let amount = this.refs.amount.getDOMNode().value;		
		let description = this.refs.desc.getDOMNode().value;

		if (amount === '' || isNaN(amount)) {
			alert('Please add a number for amount');
		} else if (description.trim() === '') {
			alert('Please add a description');
		} else {
			if (this.props.formType === 'income') {
				amount = amount;
			} else if (this.props.formType === 'expense') {
				amount = -Math.abs(amount);
			}

			Dispatcher.dispatch({ action: 'createExpense', data: { text: amount, desc: description } });
			this.refs.amount.getDOMNode().value = '';
			this.refs.desc.getDOMNode().value = '';
			this.setState({ displayForm: false})
		}					
	}
}