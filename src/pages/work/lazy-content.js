import React, { lazy, Suspense } from "react";
import { ContentWrapper } from "../../components";

const LazyContent = ({
	fallback = "",
	template = "",
	classes = [],
	...rest
}) => {
	let Component = null;
	let groupClasses = [...classes];

	switch (template) {
		case "projects":
			Component = lazy(() => import("./project"));
			groupClasses = ["projects", ...groupClasses];
			break;
		case "blogs":
			Component = lazy(() => import("./blog"));
			groupClasses = ["blogs", ...groupClasses];
			break;
		default:
			Component = lazy(() => <div>No matching template found</div>);
			break;
	}

	return (
		<Suspense fallback={fallback}>
			<ContentWrapper
				component={Component}
				classes={groupClasses}
				{...rest}
			/>
		</Suspense>
	);
};

export default LazyContent;
