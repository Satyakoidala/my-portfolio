import React from "react";
import { Outlet } from "react-router-dom";
import { useWindowEvent } from "../../hooks";
import { RouteTransition } from "../../components/transitions";
import NavBar from "./navbar";
import Footer from "./footer";

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
			<Footer />
		</>
	);
};

export default PageLayout;
