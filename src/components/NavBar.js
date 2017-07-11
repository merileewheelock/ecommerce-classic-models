import React, { Component } from 'react';

class NavBar extends Component{
	render(){
		return(
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">Classic Models</a>
					</div>
					<ul className="nav navbar-nav">
						<li className="active"><a href="#">Home</a></li>
						<li><a href="#">About Us</a></li>
						<li className="dropdown">
							<a className="dropdown-toggle" data-toggle="dropdown" href="#">Pages
							<span className="caret"></span></a>
							<ul className="dropdown-menu">
								<li><a href="#">Page 1-1</a></li>
								<li><a href="#">Page 1-2</a></li>
								<li><a href="#">Page 1-3</a></li>
							</ul>
						</li>
						<li><a href="#">Contact</a></li>
					</ul>
					<ul className="nav navbar-nav">
						<input placeholder="Search" />
						<button class="btn btn-default">Go!</button>
					</ul>
				</div>
			</nav>
		)
	}
}

export default NavBar;