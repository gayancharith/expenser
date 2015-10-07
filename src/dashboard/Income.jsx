import { React } from 'praxis';

export default class Income extends React.Component {
	constructor(props) {
		super(props);

		this.onAddIncome = () => {
			this.addIncome();
		}
	}

	render() {
		return (
			<button onClick={this.props.onClick}> Add Income </button>
		);
	}
}