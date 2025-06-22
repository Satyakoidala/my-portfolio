import React from "react";
import { createRoot } from "react-dom/client";
import ErrorBoundary from "./src/components/modules/error-boundary";
import App from "./src/components/page";

const domRoot = document.getElementById("root");

if (domRoot) {
	const root = createRoot(domRoot);
	root.render(
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	);
}
