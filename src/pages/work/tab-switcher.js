import React, { lazy, Suspense } from "react";

const LazyBlogs = lazy(() => import("./blogs"));
const LazyPkgModules = lazy(() => import("./pkg-modules"));
const LazyWebApps = lazy(() => import("./web-apps"));

const TabSwitcher = ({ currSelection }) => {
	switch (currSelection) {
		case "web-apps":
			return (
				<Suspense fallback={<div>Loading Web Apps...</div>}>
					<LazyWebApps />
				</Suspense>
			);
		case "ui-comps":
			return <div>Content for UI comps </div>;
		case "blogs":
			return (
				<Suspense fallback={<div>Loading Blogs...</div>}>
					<LazyBlogs />
				</Suspense>
			);
		case "npm-modules":
			return (
				<Suspense fallback={<div>Loading Node Modules...</div>}>
					<LazyPkgModules />
				</Suspense>
			);
		case "certifications":
			return <div>Content for Certifications </div>;
		default:
			return <div>No matching content found!!</div>;
	}
};

export default TabSwitcher;
