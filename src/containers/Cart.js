import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import GetCart from '../actions/GetCart';
import ProductTableRow from '../components/ProductTableRow';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class Cart extends Component{
	constructor(props) {
		super(props);
		this.makePayment = this.makePayment.bind(this);
	}

	componentDidMount() {
		if(this.props.loginInfo.token !== undefined){
			this.props.getCart(this.props.loginInfo.token)
		}else{

		}
	}

	makePayment() {
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_plLpbnhczfUJMY6FR4Uk2jtO',
            locale: 'auto',
            image: 'https://d30y9cdsu7xlg0.cloudfront.net/png/2783-200.png',
            token: (token) => {
            	console.log(token)
                var theData = {
                    amount: this.props.cartInfo.totalPrice * 100,
                    stripeToken: token.id,
                    userToken: this.props.loginInfo.token
                }
                $.ajax({
                    method: 'POST',
                    url: window.hostAddress + '/stripe',
                    data: theData
                }).done((data) => {
                    console.log(data);
                    if (data.msg === 'paymentSuccess') {
                    	this.props.history.push('/thankyou')
                    }
                });
            }
        });
        handler.open({
            name: "Pay Now",
            description: 'Continue to checkout',
            amount: this.props.cartInfo.totalPrice * 100
        })
    }

	render(){
		console.log(this.props.cartInfo.products)
		var cartArray = [];
		
		if(this.props.cartInfo.products === undefined){
			return(
				<div className="text-center">
					<h3>Your cart is empty! Get shopping or <Link to="/login">login</Link>.</h3>
					<img src="http://www.airsoftcloud.com/media/wysiwyg/emptycart.png" />
				</div>
			)
		}else if(this.props.cartInfo.products !== undefined){
			this.props.cartInfo.products.map((product,index)=>{
				console.log(product)
				cartArray.push(
					<ProductTableRow
						product={product}
						key={index}
						addToCart={null}
						loggedIn={false}
						token={null}
					/>
				)
			})
		}

		return(
			<div>
				<div className="order-total col-sm-2 text-center">
					<div>Your order total is ${this.props.cartInfo.totalPrice}</div>
					<button className="pay-now btn btn-success" onClick={this.makePayment}>
						Pay now!
					</button>
				</div>
				<div className="col-sm-10 text-center">
					{cartArray}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		loginInfo: state.registerReducer,
		cartInfo: state.cartReducer
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getCart: GetCart
	}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)