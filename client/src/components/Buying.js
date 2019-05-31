import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBtcBuying } from '../actions/index';

class App extends Component {
	componentDidMount() {
		this.props.fetchBtcBuying();
	}
	render() {
		if(this.props.buying.length > 0) {
			return this.props.buying.map(buy => {
	            return (
	                <tr>
	                	<td>{buy.price}</td>
	                	<td>{buy.quantity}</td>
	                	<td>{buy.sum}</td>
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

function mapStateToProps({ buying }) {
	return { buying };
}



export default connect(mapStateToProps, { fetchBtcBuying })(App);