import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import {connect} from 'react-redux'

class NavBar extends Component{
	constructor(props) {
		super(props);
		this.state = {
			productlines: []
		}
	}

	componentDidMount() {
		// go get all productlines from the DB.
		$.getJSON(window.hostAddress+'/productlines/get',(productlinesData)=>{
			// console.log(productlinesData);
			this.setState({
				productlines: productlinesData
			})
		})
	}

	render(){
		// console.log(this.props.cartInfo)
		if(this.props.cartInfo.totalPrice !== undefined){
			var totalPrice = this.props.cartInfo.totalPrice
			var totalItems = this.props.cartInfo.totalItems
		}else{
			totalPrice = 0.00;
			totalItems = 0;
		}

		// Temp var to store our <link>
		const shopMenu = [];
		const smallShopMenu = [];
		// Map through this.state.productlines. First render, will not loop (because array is empty)
		this.state.productlines.map((pl,index)=>{
			// console.log(pl)
			shopMenu.push(
				<Link key={index} to={`/shop/${pl.link}`}>{pl.productLine}</Link>
			)
			smallShopMenu.push(
				<li key={index}><Link to={`/shop/${pl.link}`}>{pl.productLine}</Link></li>
			)
		})
	
	if(this.props.registerInfo.name === undefined){
		var rightBar = [
			<li key="1"><Link to="/login">Login</Link></li>,
			<li key="2"><Link to="/register">Register</Link></li>,
			<li key="3"><Link to="/cart">(0) items in your cart | ($0.00)</Link></li>		
		]
	}else{
		rightBar = [
			<li key="1" className="userNameLoggedIn hidden-sm hidden-xs"><Link to="/users">Welcome, {this.props.registerInfo.name}</Link></li>,
			<li key="2"><Link to="/cart">({totalItems}) items in your cart | (${totalPrice})</Link></li>,		
			<li key="3"><Link to="/logout">Logout</Link></li>
		]		
	}

		return(
			<div>
				<nav className="navbar navbar-default navbar-fixed-top">
					<div className="container-fluid navbar-white">
						<div className="navbar-header hidden-sm hidden-xs">
							<Link to="/" className="navbar-brand">ClassicModels</Link>
						</div>

						{/* NAVBAR FOR LARGER SCREENS */}
						<div className="hidden-sm hidden-xs">
							<ul className="nav navbar-nav">
								<li><Link to="/">Home</Link></li>
								<li className="dropdown">
									<Link to="/">Shop <i className="arrow down" /></Link>
									<ul>
										<li className="dropdown-links">
											{/* Drop in the array of <Link> created above */}
											{shopMenu}
										</li>
									</ul>
								</li>
								<li><Link to="/about">About Us</Link></li>
								<li><Link to="/contact">Contact Us</Link></li>
							</ul>
							<ul className="nav navbar-nav float-right">
								{rightBar}
							</ul>
						</div>

						{/* NAVBAR FOR SMALLER SCREENS */}
						<div className="dropdown hidden-lg hidden-md">
							<div className="nav navbar-nav dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
								<Link to="/" className="navbar-brand">ClassicModels</Link>
							</div>
							<ul className="nav navbar-nav dropdown-menu" aria-labelledby="dropdownMenu1">
								<li><Link to="/">Home</Link></li>
								<li className="dropdown">
									<Link to="/">Shop</Link>
									<div className="smaller-shop-menu">{smallShopMenu}</div>
								</li>
								<li><Link to="/about">About Us</Link></li>
								<li><Link to="/contact">Contact Us</Link></li>
								{rightBar}
							</ul>
						</div>

					</div>
				</nav>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		registerInfo: state.registerReducer,
		cartInfo: state.cartReducer
	}
}

// export default NavBar
export default connect(mapStateToProps)(NavBar)