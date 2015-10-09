import {React, Dispatcher} from 'praxis';
import Income from './Income';
import Expense from './Expense';
import ExpenseForm from './ExpenseForm';
import ExpenseSummary from './ExpenseSummary';
import Header from '../components/header';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {displayForm: false, expenses: Dispatcher.get('expenses')};
        console.log(Dispatcher.get('expenses'));

        this.onAddIncome = () => {
            this.handleAddIncome();
        }

        this.onAddExpense = () => {
            this.handleAddExpense();
        }        

        this.onSubmit = () => {
            this.handleSubmit();
        }

        this.onClose = () => {
            this.handleClose();
        }

        this.hideForm = () => {
            this.hideForms();
        }
    }

    render() {
        let formTitle = <Header formType={this.state.form} />;
        let onAddIncome = () => { this.handleAddIncome(); };

        return (
        	<div>
	        	<h1>Expense Manager</h1>
	        	<Income onClick={this.onAddIncome}/>
	        	<Expense onClick={this.onAddExpense}/>
                <br /><br /><hr />
                <ExpenseForm 
                    expenses={this.state.expenses}
                    onSubmit={this.onSubmit}
                    onClose={this.onClose}
                    formType={this.state.form}
                    hideForm={this.hideForm}
                    ref='expeneceForm'
                />
                <ExpenseSummary expenses={this.state.expenses} />	        	
	        </div>
        );
    }

    handleAddIncome() {
        this.setState({form: 'income'});
        this.refs.expeneceForm.displayForm();
    }

    handleAddExpense() {
        this.setState({form: 'expense'});
        this.refs.expeneceForm.displayForm();
    }

    hideForms() {
        this.setState({displayForm: false});
    }
}