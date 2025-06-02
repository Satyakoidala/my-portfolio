import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./nav-bar";

import "./style.scss";

const PageLayout = () => {
	return (
		<>
			<NavBar />
			<div className="root-reveal">
				<Outlet />
				{/* used for rendering the children with exact child route match */}
			</div>
		</>
	);
};

export default PageLayout;
