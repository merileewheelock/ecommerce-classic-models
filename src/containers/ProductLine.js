import React, { Component } from 'react';
import $ from 'jquery';

class ProductLine extends Component{
	constructor(props) {
		super(props);
		this.state = {
			productList: []
		}
	}

	componentDidMount() {
		// console.log(this.props.match)
		const pl = this.props.match.params.productLine;
		// console.log(pl)
		const url = window.hostAddress + `/productlines/${pl}/get`
		$.getJSON(url,(data)=>{
			// console.log(data)
			this.setState({
				productList: data
			})
		})
	}

	componentDidUpdate() {
		const pl = this.props.match.params.productLine;
		const url = window.hostAddress + `/productlines/${pl}/get`
		$.getJSON(url,(data)=>{
			this.setState({
				productList: data
			})
		})
	}

	sortTable(columnName){

	}

	render(){
		var productTableArray = [];
		this.state.productList.map((product, index)=>{
			if(product.quantityInStock > 100){
				var inStock = "Item in stock"
			}else if(product.quantityInStock > 0){
				var inStockClass = "bg-warning"
				inStock = "Low quantity, order soon!"
			}else{
				inStockClass = "bg-danger"
				inStock = "Out of stock"
			}
			productTableArray.push(
				<tr key={index}>
					<td>{product.productName}</td>
					<td>{product.productScale}</td>
					<td>{product.productVendor}</td>
					<td>{product.productDescription}</td>
					<td className={inStockClass}>{inStock}</td>
					<td>{product.buyPrice}</td>
					<td>{product.MSRP}</td>
				</tr>
			)
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
							<th className="table-head" onClick={()=>{this.sortTable("name")}}>Product Name</th>
							<th className="table-head" onClick={()=>{this.sortTable("scale")}}>Model Scale</th>
							<th className="table-head" onClick={()=>{this.sortTable("vendor")}}>Vendor</th>
							<th className="table-head" onClick={()=>{this.sortTable("desc")}}>Description</th>
							<th className="table-head" onClick={()=>{this.sortTable("stock")}}>In Stock</th>
							<th className="table-head" onClick={()=>{this.sortTable("price")}}>Your Price!</th>
							<th className="table-head" onClick={()=>{this.sortTable("msrp")}}>MSRP Price</th>
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