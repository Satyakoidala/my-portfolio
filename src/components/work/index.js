import React from "react";
import { Container } from "../modules/core";
import { Card, Section } from "../modules/common";

import "./style.scss";

const Works = () => {
	return (
		<Section classes={["works", "section"]} roundedCorner columnLayout>
			<Container classes={["tabs"]}>
				<Card>
					<span className="card-title">Web Apps</span>
				</Card>
				<Card>
					<span className="card-title">UI Library</span>
				</Card>
				<Card>
					<span className="card-title">Blogs</span>
				</Card>
				<Card>
					<span className="card-title">NPM modules</span>
				</Card>
				<Card>
					<span className="card-title">Certifications</span>
				</Card>
			</Container>
		</Section>
	);
};

export default Works;
