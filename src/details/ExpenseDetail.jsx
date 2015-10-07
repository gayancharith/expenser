import {React} from 'praxis';

export default class ExpenseDetail extends React.Component {  
    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            	<li>
            		{this.props.desc} : 
            		{this.props.amount}
            	</li>
            
        );
    }
}