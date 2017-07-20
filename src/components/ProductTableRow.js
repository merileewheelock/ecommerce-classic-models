import React from 'react';
import $ from 'jquery';

function ProductTableRow(props){
	const product = props.product
	// console.log(product)

	if(product.quantityInStock > 100){
		var inStock = "Item in stock"
	}else if(product.quantityInStock > 0){
		var inStockClass = "bg-warning"
		inStock = "Low quantity, order soon!"
	}else{
		inStockClass = "bg-danger"
		inStock = "Out of stock"
	}

	if (props.loggedIn){
		var button = <button 
						className="btn btn-default"
						onClick={
							()=>{
								//run add to cart function and send productcode
								// console.log("Added to cart!");
								props.addToCart(product.productCode, props.token)
							}
						}
					>Add to Cart</button>
	}else{
		button = "";
	}

	return(
		<div>
			<div className="products col-md-5 col-md-offset-1">
				<div className="product-name">{product.productName}</div>
				<div className="product-image"><img src={product.image} /></div>
				<div className="msrp">$MSRP: {product.MSRP}</div>
				<div className="buyPrice">Your Price: ${product.buyPrice}</div>

				<button type="button" className="btn btn-default btn product-buttons" data-toggle="modal" data-target="#myModal">
				  More info
				</button>
				<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				        <h4 className="modal-title" id="myModalLabel">Product Information</h4>
				      </div>
				      <div className="modal-body">
				      	<div className="myModal-item product-name">{product.productName}</div>
						<div className="myModal-item product-image"><img src={product.image} /></div>
				        <div className="myModal-item">{product.productDescription}</div>
						<div className="myModal-item">Model Scale: {product.productScale}</div>
						<div className="myModal-item">Vendor: {product.productVendor}</div>
						<div className="myModal-item msrp">$MSRP: {product.MSRP}</div>
						<div className="myModal-item buyPrice">Your Price: ${product.buyPrice}</div>
						<div className={inStockClass}>{inStock}</div>
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
				      </div>
				    </div>
				  </div>
				</div>
				
				<div className="product-buttons">{button}</div>
			</div>


		{/*<tr>
			<td>{product.productName}</td>
			<td>{product.productScale}</td>
			<td>{product.productVendor}</td>
			<td>{product.productDescription}</td>
			<td className={inStockClass}>{inStock}</td>
			<td className="buyPrice">${product.buyPrice}</td>
			<td className="msrp">${product.MSRP}</td>
			<td>{button}</td>
		</tr>*/}
		</div>
	)
}

export default ProductTableRow;