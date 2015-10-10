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
                <h1>Income</h1>   <br/><br/><hr/>

            	<h2>Add Income</h2>   <br/>         
                <ExpenseForm type="income" />   <br/><br/><hr/>

                <h2>Total Income</h2> <br />
                <TotalExpense type="income" expenses={this.state.expenses} />
            </div>
        );
    }
}