import React from "react";
import { createRoot } from "react-dom/client";
import ErrorBoundary from "./src/components/error-boundary";
import App from "./src/app";
import { BootstrapProvider } from "./src/hooks/context/bootstrap-context";

const bootstrapData = window.bootstrap || {};

const domRoot = document.getElementById("root");

if (domRoot) {
	const root = createRoot(domRoot);
	root.render(
		<React.StrictMode>
			<BootstrapProvider data={bootstrapData}>
				<ErrorBoundary>
					<App />
				</ErrorBoundary>
			</BootstrapProvider>
		</React.StrictMode>
	);
}
