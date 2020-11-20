import React, { Component } from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import { TableComponent } from "./components/TableComponent";
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
				<TableComponent users={this.state.users} />
			</div>
		);
	}
}
