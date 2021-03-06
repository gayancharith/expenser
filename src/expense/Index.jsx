import { React, Dispatcher } from 'praxis';
import ExpenseForm from './ExpenseForm';
import TotalExpense from './TotalExpense';

export default class Expense extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {expenses: Dispatcher.get('expenses')};
    }

    render() {
        return (
            <div>
                <h1>Expenses</h1>   <br/><br/><hr/>

            	<h2>Add Expense</h2>   <br/>         
                <ExpenseForm type="expense" />   <br/><br/><hr/>

                <h2>Total Expense</h2> <br />
                <TotalExpense type="expense" expenses={this.state.expenses} />
            </div>
        );
    }
}