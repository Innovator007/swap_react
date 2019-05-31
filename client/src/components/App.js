import React, { Component } from 'react';
import Selling from './Selling';
import Buying from './Buying';

class App extends Component {
	state = {
		first: "selling"
	}

	swap() {
		if(this.state.first === "selling") {
			this.setState({ first: "buying" });
		} else if (this.state.first === "buying") {
			this.setState({ first: "selling" });
		}
	}

	renderFirst() {
		if(this.state.first === "selling") {
			return (
				<div className="col-md-5" style={{transition: "all 0.2s"}}>
					<h3 className="text-center">Selling BTC</h3>
					<p className="text-center">Total : 0.01555923 BTC</p>
					<table className="table">
						<thead>
							<tr>
								<td>SUM(BTC)</td>
								<td>Quantity</td>
								<td>Price</td>
							</tr>
						</thead>
						<tbody>
							<Selling />
						</tbody>
					</table>
				</div>
			);
		} else {
			return (
				<div className="col-md-5">
					<h3 className="text-center">Buying BTC</h3>
					<p className="text-center">Total : 24.04 AUD</p>
					<table className="table">
						<thead>
							<tr>
								<td>Price</td>
								<td>Quantity</td>
								<td>SUM(BTC)</td>
							</tr>
						</thead>
						<tbody>
							<Buying />
						</tbody>
					</table>
				</div>
			);
		}
	}

	renderSecond() {
		if(this.state.first === "selling") {
			return (
				<div className="col-md-5">
					<h3 className="text-center">Buying BTC</h3>
					<p className="text-center">Total : 24.04 AUD</p>
					<table className="table">
						<thead>
							<tr>
								<td>Price</td>
								<td>Quantity</td>
								<td>SUM(BTC)</td>
							</tr>
						</thead>
						<tbody>
							<Buying />
						</tbody>
					</table>
				</div>
			);
		} else {
			return (
				<div className="col-md-5">
					<h3 className="text-center">Selling BTC</h3>
					<p className="text-center">Total : 0.01555923 BTC</p>
					<table className="table">
						<thead>
							<tr>
								<td>SUM(BTC)</td>
								<td>Quantity</td>
								<td>Price</td>
							</tr>
						</thead>
						<tbody>
							<Selling />
						</tbody>
					</table>
				</div>
			);
		}
	}

	render() {
		return (
			<div className="container mt-5">
				<div className="row">
				{ this.renderFirst() }
				<div className="col-md-2 text-center mt-4">
					<i style={{ cursor: "pointer" }} onClick={() => this.swap()} className="fa fa-exchange cursor"></i>
				</div>
				{ this.renderSecond() }
				</div>
			</div>
		);
	}
}


export default App;