import React from "react";

import { TabSwitcher } from "../../components";
import LazyContent from "./lazy-content";
import Footer from "../layout/footer";

import "./style.scss";

const Works = () => {
	const menu = window.bootstrap.sections.work.tabs || [];

	const getCurrentContent = (selection) => {
		switch (selection) {
			case "web-apps":
				return (
					<LazyContent
						template="projects"
						fallback={<div>Loading Web Apps...</div>}
						path="sections.work.webApps"
					/>
				);
			case "ui-comps":
				return <div>Content for UI comps </div>;
			case "blogs":
				return (
					<LazyContent
						template="blogs"
						fallback={<div>Loading Blogs...</div>}
						path="sections.work.blogs"
					/>
				);
			case "npm-modules":
				return (
					<LazyContent
						template="projects"
						fallback={<div>Loading Node Modules...</div>}
						path="sections.work.pkgModules"
					/>
				);
			case "certifications":
				return <div>Content for Certifications </div>;
			default:
				return <div>No matching content found!!</div>;
		}
	};

	return (
		<div className="works section">
			<TabSwitcher data={menu} getCurrentContent={getCurrentContent} />
			<Footer />
		</div>
	);
};

export default Works;
