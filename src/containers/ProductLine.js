import React, { Component } from 'react';
import $ from 'jquery';
import ProductTableRow from '../components/ProductTableRow';

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
		var productTableArray = [];
		this.state.productList.map((product, index)=>{
			productTableArray.push(<ProductTableRow product={product} key={index} />)
		})

		if(this.state.productList.length === 0){
			var textHeader = "";
		}else{
			textHeader = this.state.productList[0].productLine;
		}

		return(
			<div>
				<h1>{textHeader}</h1>
				<table className="table table-striped">
					<thead>
						<tr>
							<th className="table-head" onClick={()=>{this.sortTable("productName")}}>Product Name</th>
							<th className="table-head" onClick={()=>{this.sortTable("productScale")}}>Model Scale</th>
							<th className="table-head" onClick={()=>{this.sortTable("productVendor")}}>Vendor</th>
							<th className="table-head" onClick={()=>{this.sortTable("productDescription")}}>Description</th>
							<th className="table-head" onClick={()=>{this.sortTable("quantityInStock")}}>In Stock</th>
							<th className="table-head" onClick={()=>{this.sortTable("buyPrice")}}>Your Price!</th>
							<th className="table-head" onClick={()=>{this.sortTable("MSRP")}}>MSRP Price</th>
							<th className="table-head">Cart</th>
						</tr>
					</thead>
					<tbody>
						{productTableArray}
					</tbody>
				</table>
			</div>
		)
	}
}

export default ProductLine;