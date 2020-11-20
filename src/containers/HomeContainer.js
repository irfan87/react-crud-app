import React, { Component } from "react";
import { TableComponent } from "../components/TableComponent";

export default class HomeContainer extends Component {
	render() {
		const { users } = this.props;
		return (
			<div>
				<TableComponent users={users} />
			</div>
		);
	}
}
