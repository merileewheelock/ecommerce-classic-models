import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
// import $ from 'jquery';

// Because this is a container, we need connect from react-redux
import { connect } from 'react-redux';

// get the registerAction function which runs on submission
import RegisterAction from '../actions/RegisterAction';

class Register extends Component{
	constructor(props) {
		super(props);
		this.state = {
			registerMessage: ""
		}
		this.handleRegistration = this.handleRegistration.bind(this);
	}

	handleRegistration(event){
		event.preventDefault();
		console.log("User submitted the form!");
		var name = event.target[0].value;
		var email = event.target[1].value;
		var accountType = event.target[2].value;
		var username = event.target[3].value;
		var password = event.target[4].value;
		var city = event.target[5].value;
		var state = event.target[6].value;
		var salesRep = event.target[7].value;
		// console.log(name);
		this.props.registerAction({
			name: name,
			email: email,
			accountType: accountType,
			username: username,
			password: password,
			city: city,
			state: state,
			salesRep: salesRep
		});
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.registerResponse.msg == 'userInserted'){
			this.props.history.push('/');
		}
	}

	componentWillReceiveProps(nextProps) {
		// console.log(nextProps)
		if (nextProps.registerResponse.msg == 'userAlreadyExists'){
			// console.log("Username already exists")
			this.setState({
				registerMessage: "Username already exists"
			})
		}
	}

	render(){

		// console.log(this.props.registerResponse)
		
		return(
			<div className="container register-wrapper">
				<h3>CREATE AN ACCOUNT</h3>
				<h3 className="badEmail text-center">{this.state.registerMessage}</h3>
				<Form horizontal onSubmit={this.handleRegistration}>
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={2}>
							Name
						</Col>
						<Col sm={8}>
							<FormControl type="text" name="fullName" placeholder="Full Name" />
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={2}>
							Email
						</Col>
						<Col sm={8}>
							<FormControl type="text" name="email" placeholder="Email" />
						</Col>
					</FormGroup>
					<FormGroup controlId="formAccountSelect">
			            <Col componentClass={ControlLabel} sm={2}>
			                Account Type
			            </Col>
			            <Col sm={8}>
			                <FormControl componentClass="select" placeholder="formAccountSelect">
			                    <option value="customer">Customer</option>
			                    <option value="employee">Employee</option>
			                </FormControl>    
			            </Col>
			        </FormGroup>
			        <FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={2}>
							Username
						</Col>
						<Col sm={8}>
							<FormControl type="text" name="username" placeholder="Username" />
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={2}>
							Password
						</Col>
						<Col sm={8}>
							<FormControl type="password" name="password" placeholder="Password" />
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={2}>
							City
						</Col>
						<Col sm={8}>
							<FormControl type="text" name="city" placeholder="City" />
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={2}>
							State
						</Col>
						<Col sm={8}>
							<FormControl type="text" name="state" placeholder="State" />
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={2}>
							Sales Representative
						</Col>
						<Col sm={8}>
							<FormControl type="text" name="employee" placeholder="Employee you work with" />
						</Col>
					</FormGroup>
					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button bsStyle="primary" bsSize="small" type="submit">
								Register
							</Button>
						</Col>
					</FormGroup>
				</Form>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		registerResponse: state.registerReducer
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		registerAction: RegisterAction
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
// export default Register;