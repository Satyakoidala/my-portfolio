import React from "react";
import { Card } from "../../components";

import "./project.scss";

const Project = ({ data = {} }) => {
	const { links = [], name, description } = data;

	return (
		<Card classes={["project-card"]}>
			<h3 className="project-title">{name}</h3>
			<div className="project-desc">{description}</div>
			{links.length > 0 && (
				<div className="project-links">
					{links.map((link, index) => (
						<a
							key={index}
							className="project-link"
							href={link?.url}
							rel={link?.rel}
							target={link.target}
						>
							{link.name}
						</a>
					))}
				</div>
			)}
		</Card>
	);
};

export default Project;
