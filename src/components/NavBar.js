import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import Slick from './Slick'
import $ from 'jquery';

class NavBar extends Component{
	constructor(props) {
		super(props);
		this.state = {
			productlines: []
		}
	}

	componentDidMount() {
		// go get all productlines from the database
		$.getJSON(window.hostAddress+'/productlines/get',(productlinesData)=>{
			console.log(productlinesData)
			this.setState({
				productlines: productlinesData
			})
		})
	}

	render(){
		// temp var to store our <Link>
		const shopMenu = [];
		// map through this.state.productlines. First render will not loop because array is empty
		this.state.productlines.map((pl, index)=>{
			shopMenu.push(
				<Link key={index} to={`/shop/${pl.link}`}>{pl.productLine}</Link>
			)
		})

		return(
			<div>
				<nav className="navbar navbar-default navbar-fixed-top">
					<div className="container-fluid navbar-white">
						<div className="navbar-header">
							<Link to="/" className="navbar-brand link">ClassicModels</Link>
						</div>
						<div>
							<ul className="nav navbar-nav">
								<li><Link to="/" className="link">Home</Link></li>
								<li className="dropdown">
									<Link to="/shop" className="link">Shop <i className="arrow down" /></Link>
									<ul>
										<li className="dropdown-links">
											{/* Drop in the array of <Link> created above */}
											{shopMenu}
										</li>
									</ul>
								</li>
								<li><Link to="/about" className="link">About Us</Link></li>
								<li><Link to="/contact" className="link">Contact Us</Link></li>
							</ul>
						</div>
						<div>
							<ul className="nav navbar-nav float-right">
								<li className="text-right"><Link to="/login" className="link">Login</Link></li>
								<li className="text-right"><Link to="/register" className="link">Register</Link></li>
								<li className="text-right"><Link to="/cart" className="link">(0) items in your cart | ($0.00)</Link></li>
							</ul>
						</div>
					</div>
				</nav>
				<Route exact path="/" component={Slick} />
			</div>
		)
	}
}

export default NavBar;