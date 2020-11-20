import React, { Component } from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
export default class App extends Component {
	state = {
		title: "CRUD React & Redux",
	};

	render() {
		return (
			<div>
				<NavbarComponent />
				<JumbotronComponent title={this.state.title} />
				<h1>React CRUD</h1>
			</div>
		);
	}
}
