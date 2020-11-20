import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";

const BackComponent = () => {
	return (
		<Row className="mb-2">
			<Col>
				<Link to="/">
					<Button color="primary" className="mr-2">
						<span>
							<FontAwesomeIcon icon={faArrowLeft} />
						</span>{" "}
						Back
					</Button>
				</Link>
			</Col>
		</Row>
	);
};

export default BackComponent;
