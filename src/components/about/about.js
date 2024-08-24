import React from "react";
import { Container } from "../container";

import "./about.scss";

const About = () => {
	return (
		<Container classes={["about", "section"]}>
			This is about section
			<Container classes="profile-intro"></Container>
		</Container>
	);
};

export default About;
