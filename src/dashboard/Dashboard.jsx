import {React, Dispatcher} from 'praxis';
import Income from './Income';
import Expense from './Expense';
import ExpenseForm from './ExpenseForm';
import ExpenseSummary from './ExpenseSummary';
import Header from '../components/header';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {displayForm: false, form: '', expenses: Dispatcher.get('expenses')};
        console.log(Dispatcher.get('expenses'));
        console.log('expenses => ' + this.state.expenses);

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
        console.log(this.state.expenses);
        let formTitle = <Header formType={this.state.form} />;

        return (
        	<div>
	        	<h1>Expense Manager</h1>
	        	<Income onClick={this.onAddIncome}/>
	        	<Expense onClick={this.onAddExpense}/>
                <br /><br /><hr />
                {
                    (this.state.displayForm) ?
                        // <Header formType={this.state.form} />
                        <ExpenseForm 
                            expenses={this.state.expenses}
                            onSubmit={this.onSubmit}
                            onClose={this.onClose}
                            formType={this.state.form}
                            hideForm={this.hideForm}
                        />
                    : null
                }
                <ExpenseSummary expenses={this.state.expenses} />	        	
	        </div>
        );
    }

    handleAddIncome() {
        this.setState({displayForm: true, form: 'income'});
        console.log(this.state.displayForm);
    }

    handleClose() {
        this.setState({displayForm: false});        
    }

    handleAddExpense() {
        console.log('aaaa');
        this.setState({displayForm: true, form: 'expense'});
    }
}