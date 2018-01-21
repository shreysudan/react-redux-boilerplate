import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
	render() {
		return(
			<div>
				<h3>A simple React-Redux boilerplate, created with create-react-app.</h3>
			</div>
		)
	}
}

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>
	, document.getElementById('root'));