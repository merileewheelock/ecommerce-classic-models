import React, { Component } from 'react';
import $ from 'jquery';
import ProductTableRow from '../components/ProductTableRow';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import UpdateCart from '../actions/UpdateCart'

class ProductLine extends Component{
	constructor(props) {
		super(props);
		this.state = {
			productList: [],
			whichWay: true
		}
		this.sortTable = this.sortTable.bind(this)
		this.getProducts = this.getProducts.bind(this)
	}

	componentDidMount() {
		this.getProducts(this.props);
		
	}

	componentWillReceiveProps(nextProps) {
		this.getProducts(nextProps);
	}

	getProducts(props){
		// console.log(this.props.match)
		const pl = props.match.params.productLine;
		// console.log(pl)
		const url = window.hostAddress + `/productlines/${pl}/get`
		$.getJSON(url,(data)=>{
			// console.log(data)
			this.setState({
				productList: data
			})
		})
	}

	sortTable(columnName){
		// console.log(columnName)
		// Make a copy of the productList since sort alters the original array
		var productList = this.state.productList.slice();

		productList.sort((a, b)=>{
			var textA = a[columnName];
			var textB = b[columnName];
			// ternary statement, after ? if true, after: if false
			if (this.state.whichWay){
				return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
			}else{
				return (textA < textB) ? 1 : (textA > textB) ? -1 : 0;
			}
		})

		this.setState({
			productList: productList,
			whichWay: !this.state.whichWay
		})
	}

	render(){

		// console.log(this.props.loginInfo)
		// Check to see if msg = loginSuccess
		// If so, they are logged in, let the ProductTableRow know
		// If not, send appropriate props
		if (this.props.loginInfo.token != undefined){
			// these are the droids we're looking for
			var loggedIn = true;
			var token = this.props.loginInfo.token;
		}else{
			var loggedIn = false;
			var token = null;
		}

		var productTableArray = [];
		this.state.productList.map((product, index)=>{
			productTableArray.push(
				<ProductTableRow
					product={product}
					key={index}
					addToCart={this.props.updateCart} 
					loggedIn={loggedIn}
					token={token}
				/>)
		})

		if(this.state.productList.length === 0){
			var textHeader = "";
		}else{
			textHeader = this.state.productList[0].productLine;
		}

		return(
			<div>
				<h1 className="text-center">{textHeader}</h1>
				<div className="search-section col-sm-2 hidden-xs">
					<div className="search-by">SEARCH BY</div>
					<div className="table-head-sortable" onClick={()=>{this.sortTable("productName")}}>Name</div>
					<div className="table-head-sortable" onClick={()=>{this.sortTable("productScale")}}>Model Scale</div>
					<div className="table-head-sortable" onClick={()=>{this.sortTable("productVendor")}}>Vendor</div>
					<div className="table-head-sortable" onClick={()=>{this.sortTable("productDescription")}}>Description</div>
					<div className="table-head-sortable" onClick={()=>{this.sortTable("quantityInStock")}}>Stock</div>
					<div className="table-head-sortable" onClick={()=>{this.sortTable("buyPrice")}}>Price</div>
				</div>
				<div className="product-boxes text-center col-sm-10 col-xs-12">
					{productTableArray}
				</div>



				{/*<table className="table table-striped">
					<thead>
						<tr>
							<th className="table-head-sortable" onClick={()=>{this.sortTable("productName")}}>Product Name</th>
							<th className="table-head-sortable" onClick={()=>{this.sortTable("productScale")}}>Model Scale</th>
							<th className="table-head-sortable" onClick={()=>{this.sortTable("productVendor")}}>Vendor</th>
							<th className="table-head-sortable" onClick={()=>{this.sortTable("productDescription")}}>Description</th>
							<th className="table-head-sortable" onClick={()=>{this.sortTable("quantityInStock")}}>In Stock</th>
							<th className="table-head-sortable" onClick={()=>{this.sortTable("buyPrice")}}>Your Price!</th>
							<th className="table-head-sortable" onClick={()=>{this.sortTable("MSRP")}}>MSRP Price</th>
						</tr>
					</thead>
					<tbody>
						{productTableArray}
					</tbody>
				</table>*/}
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		loginInfo: state.registerReducer
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		updateCart: UpdateCart
	}, dispatch)
}

// export default ProductLine;
export default connect(mapStateToProps,mapDispatchToProps)(ProductLine);