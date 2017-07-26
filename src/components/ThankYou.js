import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function(){
	return(
		<div>
			<h1>THANK YOU!</h1>
			<hr />
			<p>Your order had been received and will ship soon.</p>
			<p>Return <Link to="/">home</Link>.</p>
		</div>
	)
}