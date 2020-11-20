/*
  REFER TO: 
  - https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/getting-started.html
  - https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Table%20Search&selectedStory=Basic%20Search%20Table&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
*/

import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Button, Container } from "reactstrap";
import { faEdit, faInfo, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { SearchBar } = Search;

const columns = [
	{
		dataField: "id",
		text: "ID",
		sort: true,
		align: "center",
		headerAlign: "center",
		headerStyle: () => {
			return { width: "5%" };
		},
	},
	{
		dataField: "name",
		text: "Name",
		sort: true,
		headerAlign: "center",
	},
	{
		dataField: "address",
		text: "Address",
		sort: true,
		headerAlign: "center",
	},
	{
		dataField: "age",
		text: "Age",
		sort: true,
		align: "center",
		headerAlign: "center",
	},
	{
		dataField: "phone_number",
		text: "Phone Number",
		sort: true,
		align: "center",
		headerAlign: "center",
	},
	{
		dataField: "link",
		text: "Action",
		align: "center",
		headerAlign: "center",
		formatter: (rowContent, row) => {
			return (
				<div>
					<a href={`/details/${row.id}`}>
						<Button color="success" className="mr-2">
							<span>
								<FontAwesomeIcon icon={faInfo} />
							</span>
						</Button>
					</a>
					<a href={`/edit/${row.id}`}>
						<Button color="warning" className="mr-2">
							<span>
								<FontAwesomeIcon icon={faEdit} />
							</span>
						</Button>
					</a>
					<Button color="danger" className="mr-2">
						<span>
							<FontAwesomeIcon icon={faTrash} />
						</span>
					</Button>
				</div>
			);
		},
	},
];

const defaultSorted = [
	{
		dataField: "id",
		order: "asc",
	},
];

export const TableComponent = ({ users }) => {
	return (
		<Container>
			<ToolkitProvider
				bootstrap4
				keyField="id"
				data={users}
				columns={columns}
				defaultSorted={defaultSorted}
				search
			>
				{(props) => (
					<div>
						<div className="float-right">
							<SearchBar {...props.searchProps} placeholder="Search..." />
						</div>
						<BootstrapTable
							{...props.baseProps}
							pagination={paginationFactory()}
						/>
					</div>
				)}
			</ToolkitProvider>

			{/* <BootstrapTable
				bootstrap4
				keyField="id"
				data={users}
				columns={columns}
				defaultSorted={defaultSorted}
			/>
			; */}
		</Container>
	);
};
