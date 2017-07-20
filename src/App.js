import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/Home';
import NavBar from './containers/NavBar';
import Slick from './components/Slick';
import About from './components/About';
import Register from './containers/Register';
import Login from './containers/Login';
import ProductLine from './containers/ProductLine';
import Cart from './containers/Cart';


class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<NavBar />
					<Route exact path="/" component={Slick} />
					<div className="container main">
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route path="/shop/:productLine" component={ProductLine}/>
						<Route exact path="/cart" component={Cart} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
