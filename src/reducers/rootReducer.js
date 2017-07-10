// This is out master reducer... the root reducer.
// The reducers hold pieces of state. The root reducer holds all the reducers.
// i.e. The root reducer holds ALL pieces of state, or application state.

// We need to get the combineReducers method from redux to make a rootReducer
// that the Provider can use.
import { combineReducers } from 'redux';

// Import each reducer here.
// First: import the StudentReducer
import StudentReducer from './StudentReducer';

// Create a rootReducer using the combineReducer method, so we can export it
// to the store in index.js
const rootReducer = combineReducers({
	// Inside here, we pass each reducer as a key value
	// Each key will be available as a piece of state later
	students: StudentReducer
})

export default rootReducer;