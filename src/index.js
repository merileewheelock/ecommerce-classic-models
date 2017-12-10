import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import App from './App';

// Go get the createStore and applyMiddleware method from the redux module
import { createStore, applyMiddleware } from 'redux';

// Import the Provider from react-redux so react and redux can talk
import { Provider } from 'react-redux';

// Import the rootReducer so we can give it to the store... fill those shelves!
import RootReducer from './reducers/rootReducer';

// Import redux-promise for our Redux AJAX
import reduxPromise from 'redux-promise';

// const theStore = createStore(RootReducer);
const theStore = applyMiddleware(reduxPromise)(createStore)(RootReducer);

// ReactDOM.render takes 2 args... 1. What, 2. Where
ReactDOM.render(
	<Provider store={theStore}>
		<App />
	</Provider>,
	document.getElementById('root')
);
