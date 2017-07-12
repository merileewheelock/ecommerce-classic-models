import React, { Component } from 'react';

// We need some glue between react and redux. This component/containersneeds to know about redux state.
// The answer is the connect method from the react-redux module. The glue.
import { connect } from 'react-redux';

class Home extends Component{
	render(){
		return(
			<div className="container">
				<h1>CLASSIC MODELS</h1>
				<div className="row text-center">
					<div className="home-pics col-md-3 col-sm-4 col-xs-6">
						<img src="http://via.placeholder.com/200x200" />
					</div>
					<div className="home-pics col-md-3 col-sm-4 col-xs-6">
						<img src="http://via.placeholder.com/200x200" />
					</div>
					<div className="home-pics col-md-3 col-sm-4 col-xs-6">
						<img src="http://via.placeholder.com/200x200" />
					</div>
					<div className="home-pics col-md-3 col-sm-4 col-xs-6">
						<img src="http://via.placeholder.com/200x200" />
					</div>
					<div className="home-pics col-md-3 col-sm-4 col-xs-6">
						<img src="http://via.placeholder.com/200x200" />
					</div>
					<div className="home-pics col-md-3 col-sm-4 col-xs-6">
						<img src="http://via.placeholder.com/200x200" />
					</div>
					<div className="home-pics col-md-3 col-sm-4 col-xs-6">
						<img src="http://via.placeholder.com/200x200" />
					</div>
					<div className="home-pics col-md-3 col-sm-4 col-xs-6">
						<img src="http://via.placeholder.com/200x200" />
					</div>
				</div>
			</div>
		)
	}
}

export default Home;