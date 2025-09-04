import React from "react";
import { Outlet } from "react-router-dom";
import { useWindowEvent } from "../../hooks";
import NavBar from "./nav-bar";
import { RouteTransition } from "../../components/transitions";

import "./style.scss";

const PageLayout = () => {
	useWindowEvent("click", (event) => {
		const elm = event.target;

		if (elm?.getAttribute("data-action-type") === "link") {
			const anchor = elm.querySelector("a[data-action-trigger-link]");
			anchor.click();
		}
	});

	return (
		<>
			<NavBar />
			<div className="root-reveal">
				<RouteTransition>
					<Outlet />
				</RouteTransition>
			</div>
		</>
	);
};

export default PageLayout;
