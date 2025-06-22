import React from "react";
import { createRoot } from "react-dom/client";
import ErrorBoundary from "./src/components/error-boundary";
import App from "./src/app";

const domRoot = document.getElementById("root");

if (domRoot) {
	const root = createRoot(domRoot);
	root.render(
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	);
}
