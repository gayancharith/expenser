import { React, Dispatcher } from 'praxis';

export default class TotalExpense extends React.Component {
	constructor(props) {
		super(props);

        this.onStoreChange = () => {
            this.forceUpdate();
        }		
	}

    componentWillMount() {
        Dispatcher.subscribe('expenses', 'change', this.onStoreChange);
    }

    componentWillUnmount() {
        Dispatcher.unsubscribe('expenses', 'change', this.onStoreChange);
    }	

	render() {
		let totalExpense = 0;
		
        this.props.expenses.forEach((expense) => {
        	if (this.props.type === expense.type) {
        		totalExpense += parseInt(expense.amount);
        	}
        });		

		return (
			<div>
				{totalExpense}
			</div>
		);
	}
}