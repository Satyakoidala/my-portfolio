import React from "react";
import { Card } from "../../components/common";
import ContentWrapper from "./content-wrapper";

import "./web-apps.scss";

const WebAppCard = ({ data = {} }) => {
	return (
		<Card classes={["web-app-card"]}>
			<h3 className="web-app-title">{data.name}</h3>
			<div className="web-app-desc">{data.description}</div>
			<div className="web-app-links">
				<a
					className="web-app-link"
					href={data.demo}
					rel="noreferrer"
					target="_blank"
				>
					Demo &#8599;
				</a>
				<a
					className="web-app-link"
					href={data.github}
					rel="noreferrer"
					target="_blank"
				>
					Source &#8599;
				</a>
			</div>
		</Card>
	);
};

const WebApps = () => {
	return (
		<ContentWrapper
			path="webApps"
			classes={["web-apps"]}
			component={WebAppCard}
			title="Web Applications"
		/>
	);
};

export default WebApps;
