import React, { lazy, Suspense } from "react";

const LazyBlogs = lazy(() => import("./blogs"));
const LazyPkgModules = lazy(() => import("./pkg-modules"));

const TabSwitcher = ({ currSelection }) => {
	switch (currSelection) {
		case "web-apps":
			return <div>Content for Web Apps </div>;
		case "ui-comps":
			return <div>Content for UI comps </div>;
		case "blogs":
			return (
				<Suspense fallback={<div>Content for Blogs </div>}>
					<LazyBlogs />
				</Suspense>
			);
		case "npm-modules":
			return (
				<Suspense fallback={<div>Content for Node Modules</div>}>
					<LazyPkgModules />
				</Suspense>
			);
		case "certifications":
			return <div>Content for Certifications </div>;
		default:
			return <div>No matching content found!!</div>;
	}

	// return <div>Default</div>;
};

export default TabSwitcher;
