import React, { createContext, useContext, useMemo } from "react";
import _ from "lodash";

// 1. Create the Context object
const BootstrapContext = createContext(null);

// 2. Create the Provider Component
export const BootstrapProvider = ({ children, data }) => {
	// Memoize data to prevent unnecessary re-renders
	// In a real scenario, you might want to validate 'data' here using PropTypes or Zod
	const value = useMemo(() => {
		console.log(data);
		return data || {}; // Provide safe fallback object
	}, [data]);

	return (
		<BootstrapContext.Provider value={value}>
			{children}
		</BootstrapContext.Provider>
	);
};

// 3. Create a custom hook for easy consumption
export const useBootstrap = (path = "") => {
	const context = useContext(BootstrapContext);

	if (context === undefined) {
		throw new Error("useBootstrap must be used within a BootstrapProvider");
	}

	return path ? _.get(context, path) : context;
};
