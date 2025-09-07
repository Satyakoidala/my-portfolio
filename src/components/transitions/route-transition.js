import React from "react";
import { useLocation } from "react-router-dom";
import FadeTransition from "./fade-transition";

const RouteTransition = ({ children }) => {
	const location = useLocation();

	return (
		<FadeTransition in key={location.pathname} appear timeout={500}>
			{children}
		</FadeTransition>
	);
};

export default RouteTransition;
