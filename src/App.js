import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import CreateUserContainer from "./containers/CreateUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";
import EditUserContainer from "./containers/EditUserContainer";
import HomeContainer from "./containers/HomeContainer";
export default class App extends Component {
	render() {
		return (
			<div>
				<NavbarComponent />
				<JumbotronComponent />
				<Router>
					<Switch>
						<Route path="/" exact>
							<HomeContainer />
						</Route>
						<Route path="/create">
							<CreateUserContainer />
						</Route>
						<Route path="/edit/:id">
							<EditUserContainer />
						</Route>
						<Route path="/details/:id">
							<DetailUserContainer />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}
