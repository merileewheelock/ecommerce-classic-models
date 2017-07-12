import React, { Component } from 'react';

class Login extends Component{
	render(){
		return(
			<div className="container">
				<h3>CUSTOMER LOGIN</h3>
				<form>
					<div className="login-field">Email Address</div>
					<input />
					<div className="login-field">Password</div>
					<input />
					<div className="login-field">
						<button className="btn btn-success">Sign in</button>
					</div>
				</form>
			</div>
		)
	}
}

export default Login;