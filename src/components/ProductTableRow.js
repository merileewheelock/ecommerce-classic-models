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

	return(
		<tr>
			<td>{product.productName}</td>
			<td>{product.productScale}</td>
			<td>{product.productVendor}</td>
			<td>{product.productDescription}</td>
			<td className={inStockClass}>{inStock}</td>
			<td>${product.buyPrice}</td>
			<td className="msrp">${product.MSRP}</td>
			<td><button className="btn btn-success">Add to Cart</button></td>
		</tr>
	)
}

export default ProductTableRow;