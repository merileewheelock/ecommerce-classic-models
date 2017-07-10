import React, { Component } from 'react';

// We need some glue between react and redux. This component/containersneeds to know about redux state.
// The answer is the connect method from the react-redux module. The glue.
import { connect } from 'react-redux';

class Home extends Component{
	render(){
		return(
			<div className="container">
				<h1>Home</h1>
			</div>
		)
	}
}

// All containers that need access to state will have this function.
// We are creating a mapping between redux state and this component's props.
// Mapping the redux state to this component's props
function mapStateToProps(state){
	// mapStateToProps returns an object with each piece of state we need
	return{
		// From our master Reducer, we have a "state" object. NOT RELATED to react state at all.
		// Inside of that state object, we have a property: students.
		// This exists because we made it a property in the root reducer.
		students: state.students
	}
}

// INSTEAD of exporting the class (component), we export connect, which is getting the component
export default connect(mapStateToProps)(Home);