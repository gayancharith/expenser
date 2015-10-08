import {React} from 'praxis';

export default class ExpenseDetail extends React.Component {  
    constructor(props) {
        super(props);
    }

    render() {    	    
        return (
            <div>
            	<li>
            		{this.props.desc} : 
            		{this.props.amount}
            	</li>	                     
            </div>	            
        );
    }
}