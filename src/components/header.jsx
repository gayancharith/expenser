import { React } from 'praxis';

export default class Header {
	render() {
		return (
			<h2>{this.props.formType}</h2>
		);
	}
}