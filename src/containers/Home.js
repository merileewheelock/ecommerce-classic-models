import React, { Component } from 'react';

// We need some glue between react and redux. This component/containersneeds to know about redux state.
// The answer is the connect method from the react-redux module. The glue.
import { connect } from 'react-redux';

class Home extends Component{
	render(){
		return(
			<div className="container">
				<h1>Cars and stuff!</h1>
			</div>
		)
	}
}

export default Home;