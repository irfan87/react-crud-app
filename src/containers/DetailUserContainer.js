import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";

export default class DetailUserContainer extends Component {
	render() {
		return (
			<Container>
				<BackComponent />
				<h1>Detail User Container</h1>
			</Container>
		);
	}
}
