import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBtcSelling } from '../actions/index';

class App extends Component {
	componentDidMount() {
		this.props.fetchBtcSelling();
	}
	render() {
		if(this.props.selling.length > 0) {
			return this.props.selling.map(sell => {
	            return (
	                <tr>
	                	<td>{sell.sum}</td>
	                	<td>{sell.quantity}</td>
	                	<td>{sell.price}</td>
	                </tr>
	            );
	        });
		} else {
			return (
				<div>Loading...</div>
			);
		}
	}
}

function mapStateToProps({ selling }) {
	return { selling };
}



export default connect(mapStateToProps, { fetchBtcSelling })(App);