import React from "react";
import { Card } from "../../components/common";
import ContentWrapper from "./content-wrapper";

import "./pkg-modules.scss";

const PkgModuleCard = ({ data = {} }) => {
	return (
		<Card classes={["pkg-module-card"]}>
			<h3 className="pkg-module-title">{data.name}</h3>
			<div className="pkg-module-desc">{data.description}</div>
			<div className="pkg-module-links">
				<a
					className="pkg-module-link"
					href={data.link}
					rel="noreferrer"
					target="_blank"
				>
					NPM &#8599;
				</a>
				<a
					className="pkg-module-link"
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

const PkgModules = () => {
	return (
		<ContentWrapper
			path="pkgModules"
			classes={["pkg-modules"]}
			component={PkgModuleCard}
			title="NPM Modules"
		/>
	);
};

export default PkgModules;
