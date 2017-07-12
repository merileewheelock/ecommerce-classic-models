import React, { Component } from 'react';

class Register extends Component{
	render(){
		return(
			<div className="container">
				<h3>CREATE AN ACCOUNT</h3>
				<form>
					<div className="register-field">First Name</div>
					<input />
					<div className="register-field">Last Name</div>
					<input />
					<div className="register-field">Email Address</div>
					<input />
					<div className="register-field">Password</div>
					<input />
					<div className="register-field">
						<button className="btn btn-success">Create</button>
					</div>
				</form>
			</div>
		)
	}
}

export default Register;