import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/Home';
import NavBar from './containers/NavBar';
import Register from './containers/Register';
import Login from './containers/Login';


class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<NavBar />
					<div className="container main">
						<Route exact path="/" component={Home} />
						<Route exact path="/Register" component={Register} />
						<Route exact path="/Login" component={Login} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
