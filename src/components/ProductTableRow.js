import React from 'react';

function ProductTableRow(props){
	const product = props.product

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
						className="btn btn-primary"
						onClick={
							()=>{
								//run add to cart function and send productcode
								console.log("Added to cart!");
								props.addToCart(product.productCode, props.token)
							}
						}
					>Add to Cart</button>
	}else{
		button = "";
	}

	return(
		<tr>
			<td>{product.productName}</td>
			<td>{product.productScale}</td>
			<td>{product.productVendor}</td>
			<td>{product.productDescription}</td>
			<td className={inStockClass}>{inStock}</td>
			<td>${product.buyPrice}</td>
			<td className="msrp">${product.MSRP}</td>
			<td>{button}</td>
		</tr>
	)
}

export default ProductTableRow;