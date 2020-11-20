import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

const JumbotronComponent = ({ title }) => {
	const element = <FontAwesomeIcon icon={faInfo} />;

	return (
		<div>
			<Jumbotron>
				<Container>
					<h1 className="display-3">{title}</h1>
					<p className="lead">
						A simple application that used Redux to manage our state data.
					</p>
					<hr className="my-2" />
					<p>With Redux, we can build any app that needs Redux.</p>
					<p className="lead">
						<Button color="info">
							<span>{element}</span> Learn More
						</Button>
					</p>
				</Container>
			</Jumbotron>
		</div>
	);
};

export default JumbotronComponent;
