import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import CreateUserContainer from "./containers/CreateUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";
import EditUserContainer from "./containers/EditUserContainer";
import HomeContainer from "./containers/HomeContainer";
export default class App extends Component {
	state = {
		title: "CRUD React & Redux",
		users: [
			{
				id: 1,
				name: "James",
				address: "NY",
				age: 24,
				phone_number: "0123456789",
			},
			{
				id: 2,
				name: "Jane",
				address: "IND",
				age: 31,
				phone_number: "0123456711",
			},
			{
				id: 3,
				name: "Fizz",
				address: "JPN",
				age: 29,
				phone_number: "0123456531",
			},
		],
	};

	render() {
		return (
			<div>
				<NavbarComponent />
				<JumbotronComponent title={this.state.title} />
				<Router>
					<Switch>
						<Route path="/" exact>
							<HomeContainer users={this.state.users} />
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
