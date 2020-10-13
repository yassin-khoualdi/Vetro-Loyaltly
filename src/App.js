import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import home from './components/home';
import dashboard from './components/dashboard';
import {PrivateRoute} from './components/PrivateRoute';


function App() {
    return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/" component = {home} />
					<Route path = "/home" component = {home} />
					<PrivateRoute path="/dashboard" component={dashboard} />
				</Switch> 
			</div>
		</BrowserRouter>
    );
}

export default App;