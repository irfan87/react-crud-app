import React, { Component } from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import { TableComponent } from "./components/TableComponent";
export default class App extends Component {
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
