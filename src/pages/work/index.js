import React from "react";

import { TabSwitcher } from "../../components";
import LazyContent from "./lazy-content";
import Footer from "../layout/footer";
import { useBootstrap } from "../../hooks/context/bootstrap-context";

import "./style.scss";

const Works = () => {
	const menu = useBootstrap("work.tabs") || [];

	const getCurrentContent = (selection) => {
		switch (selection) {
			case "web-apps":
				return (
					<LazyContent
						template="projects"
						fallback={<div>Loading Web Apps...</div>}
						path="work.webApps"
					/>
				);
			case "ui-comps":
				return <div>Content for UI comps </div>;
			case "blogs":
				return (
					<LazyContent
						template="blogs"
						fallback={<div>Loading Blogs...</div>}
						path="work.blogs"
					/>
				);
			case "npm-modules":
				return (
					<LazyContent
						template="projects"
						fallback={<div>Loading Node Modules...</div>}
						path="work.pkgModules"
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
