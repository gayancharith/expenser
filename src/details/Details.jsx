import {React} from 'praxis';

export default class Detail extends React.Component {  
    constructor(props) {
        super(props);
    }

    render() {
        let tdStyle = {
            border: '1px solid black'
        }   	    

        return (
        	<tr>
        		<td style={tdStyle}> {this.props.desc}  </td>
        		<td style={tdStyle}> {this.props.amount} </td>
        	</tr>          
        );
    }
}