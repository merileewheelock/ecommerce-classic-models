import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

// We need some glue between react and redux. This component/containersneeds to know about redux state.
// The answer is the connect method from the react-redux module. The glue.
// import { connect } from 'react-redux';

class Home extends Component{
	constructor(props) {
		super(props);
		this.state = {
			productlines: []
		}
	}

	componentDidMount() {
		// go get all productlines from the DB... we already set this up in the navbar
		$.getJSON(window.hostAddress+'/productlines/get',(productlinesData)=>{
			// console.log(productlinesData);
			this.setState({
				productlines: productlinesData
			})
		})
	}

	render(){
		const plImages = [];
		// loop through the product lines from the DB
		this.state.productlines.map((row, index)=>{
			plImages.push(
				<div key={index} className="col-lg-4 col-md-6 col-sm-6 col-xs-12 pl-images">
					<Link to={`/shop/${row.link}`}><img className="home-img" src={row.image} alt="home-images" /></Link>
					<div className="text text-center">{row.productLine}</div>
				</div>
			)
		})

		const shopMenu = [];
		this.state.productlines.map((pl,index)=>{
			shopMenu.push(
				<div key={index} className="shop-home-items"><Link to={`/shop/${pl.link}`}>{pl.productLine}</Link></div>
			)
		})

		return(
			<div className="container">
				<div className="col-md-3 hidden-sm hidden-xs shop-home-section">
					<div className="shop-home-title">SHOP</div>
					{shopMenu}
				</div>
				<div className="col-md-9 col-sm-12 col-xs-12">
					<h1 className="text-center">FEATURED PRODUCTS</h1>
					{plImages}
				</div>
			</div>
		)
	}
}

export default Home;