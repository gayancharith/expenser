import { React } from 'praxis';

export default class Expense extends React.Component {
	render() {
		return (
			<input type="button" value="Add Expense" onClick={this.props.onClick} />
		);
	}
}